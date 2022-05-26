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
    5000,
    50
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
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

//0xE05B6f6A1B12F8DcB4696b03679Db3B6B363cbe2
