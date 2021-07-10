// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import monsters from "../../code/monsters";
import * as mongoose from "mongoose";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    await mongoose.connect('mongodb://localhost/monster', {useNewUrlParser: true, useUnifiedTopology: true});

    let m =  await monsters.create({name:'Scooby',title:'doo'});

    res.status(200).json(m);
}
