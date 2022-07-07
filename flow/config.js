import { config } from "@onflow/fcl";

config()
    .put("accessNode.api","https://rest-testnet.onflow.org") // Mainnet: "https://rest-mainnet.onflow.org",
    .put("discovery.wallet", "https://fcl-discovery.onflow.org/testnet/authn") // Mainnet: "https://fcl-discovery.onflow.org/authn"
    .put("0xProfile","0xba1132bc08f82fe2")// The account address where the Profile smart contract lives on Testnet
    .put("app.detail.title","POC")
    .put("app.detail.icon" ,'https://fcl-discovery.onflow.org/images/blocto.png')
  
