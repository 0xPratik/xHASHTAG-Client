
  import Wallet from "@project-serum/sol-wallet-adapter";

const PROVIDER_URL = "https://www.sollet.io";
let wallet = new Wallet(PROVIDER_URL, "https://api.devnet.solana.com");





const connectToWallet = () => {
  if (!wallet.connected) {
    return wallet.connect() as Promise<void>;
  } else {
    return Promise.resolve();
  }
};

export const Walletuse = async (): Promise<Wallet> => {
  await connectToWallet();
  return wallet;
};



