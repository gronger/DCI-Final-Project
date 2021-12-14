import mongoose from "mongoose";

const { Schema } = mongoose;
const required = true;

const MatchSchema = new Schema({
    matchInitiator: { type: Schema.Types.ObjectId, ref: "fullstackusers", required }, 
    matchTarget: { type: Schema.Types.ObjectId, ref: "fullstackusers", required }, 
    isMutual: { type: Boolean, default: false, required }
});

MatchSchema.statics.match = async (req, res) => {

    const existingMatch = await Match.findOne({ 
        matchInitiator: req.body.matchInitiator, 
        matchTarget: req.body.matchTarget 
    }).exec();

    if (existingMatch) {
        console.log("Existing match")
        res.status(200).send(existingMatch);
        return;
    } 

    let existingMatchReversed = await Match.findOne({ 
        matchInitiator: req.body.matchTarget,
        matchTarget: req.body.matchInitiator 
    }).exec();

    if (!existingMatchReversed) {
        console.log("Creating new match")
        const m = await Match.create({ matchInitiator: req.body.matchInitiator, matchTarget: req.body.matchTarget });
        res.status(201).json(m);
        // 201 for new match
        return;
    }

    existingMatchReversed.isMutual = true;
    existingMatchReversed = await existingMatchReversed.save();
    res.status(200).send(existingMatchReversed);
};

export const Match = mongoose.model("matches", MatchSchema);