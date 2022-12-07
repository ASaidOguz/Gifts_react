const MerkleTree = require('./MerkleTree');
const niceList = require('./niceList');
const verifyProof = require('./verifyProof');

// create the merkle tree for the whole nice list
const merkleTree = new MerkleTree(niceList);

// get the root
const root = merkleTree.getRoot();
console.log("Merkle Tree Root: ",root)
// find the proof that norman block is in the list 
const name = 'Ahmet Oguz';
const index = niceList.findIndex(n => n === name );
console.log("Index:",index)
const proof = merkleTree.getProof(index);
console.log("Proof:",proof)
// verify proof against the Merkle Root
console.log( verifyProof(proof, name, root) ); // true, Norman Block is in the list!

// TRY IT OUT: what happens if you try a name not in the list, or a fake proof?