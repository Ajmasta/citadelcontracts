const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Zssbecker", "Ellio", "SpaceLlama"], // Names
    [
      "QmcMe1fMqAgSorSHeKugRmk8RngpWdWuGeLqrdtNqmG8ak", // Images
      "QmVMQ3voDXgpeMMCQHAuWC8PEHdvk6zY4KJZhzwb93UgRY",
      "QmcKN6M4owdbGTVudSjdULzBXsqiBfYNXUs4dzRiEB4awU",
    ],
    [200, 100, 300], // HP values
    [50, 100, 25],
    "Boss",
    "https://lh3.googleusercontent.com/LDomdof_a_KlWP3kP1bHjs-gKmr2rHJUPJmhRQcCf25KXUx8Y_yQGCwC4jL7Wf6N4IaYn7XUpAcKsVqL_kTJtH69zt-h1ZDl8F2Q=s0",
    500,
    50
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
  let txn;
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();
  txn = await gameContract.mintCharacterNFT(1);
  await txn.wait();

  let returnedTokenUri = await gameContract.tokenURI(1);
  console.log("Token URI:", returnedTokenUri);
  txn = await gameContract.getAllPlayers();
  console.log(txn, "holders");
  txn = await gameContract.attackBoss();
  txn = await gameContract.getDamageOfPlayer(
    "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266"
  );
  console.log("damage", txn);
  txn = await gameContract.healCharacters({
    value: ethers.utils.parseEther("0.001"),
  });
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
