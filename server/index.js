const express = require('express');
const verifyProof = require('./utils/verifyProof');
const niceList = require('./utils/niceList');
const MerkleTree = require('./utils/MerkleTree');
const port = 1225;
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

// TODO: hardcode a merkle root here representing the whole nice list
// paste the hex string in here, without the 0x prefix
const MERKLE_ROOT = '4a5d741fabb697b5dd4944bc43ba8302cc0fab6aebf10dc16f28112dd9d8f43e';

app.post('/gift', async(req, res) => {
  // grab the parameters from the front-end here
  const {proof,name} = req.body;
 
  const isInTheList = await verifyProof(proof,name,MERKLE_ROOT);
  console.log("Verif proof:",isInTheList)
  if(isInTheList) {
    res.send("You got a toy robot!");
  }
  else {
    res.send("You are not on the list :(");
  }
});
app.get('/gift-list',(req,res)=>{
    const List=JSON.stringify(niceList)
    res.send(List)
})
app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
