export const MOXIE_BACKEND_GRAPHQL_ENDPOINT: string =
    process.env["MOXIE_BACKEND_GRAPHQL_ENDPOINT"] || "";
export const CREATOR_AGENT_TOKEN_ADDRESS: string =
    process.env["CREATOR_AGENT_TOKEN_ADDRESS"] || "";
export const MINIMUM_CREATOR_AGENT_COINS: number =
    Number(process.env["MINIMUM_CREATOR_AGENT_COINS"]) || 0;
export const COMMON_AGENT_ID: string = process.env["COMMON_AGENT_ID"] || "";
export const BASE_RPC_URL: string = process.env["BASE_RPC_URL"] || "";
// queries

export const ME_QUERY = `
    query Me {
        Me {
            id
            userName
            name
            bio
            profileImageUrl
            referralCode
            referrerId
            moxieScore
            moxieRank
            totalUsers
            primaryWalletId
            communicationPreference
            createdAt
            identities {
                id
                userId
                type
                dataSource
                connectedIdentitiesFetchStatus
                metadata
                profileId
                isActive
                createdAt
                updatedAt
            }
            wallets {
                id
                userId
                walletAddress
                walletType
                dataSource
                createdAt
                deletedAt
            }
        }
    }
`;

/**
 * REUSABLE MOCK DATA STARTS BELOW
 */
export const mockMoxieUser = {
    id: "M0",
    userName: "test-user",
    name: "Test User",
    bio: "This is a test user",
    profileImageUrl: "https://test.com",
    referralCode: "test-referral-code",
    referrerId: "test-referrer-id",
    moxieScore: 100,
    moxieRank: 1,
    totalUsers: 100,
    primaryWalletId: "",
    communicationPreference: "telegram",
    createdAt: Date.now().toString(),
    identities: [],
    wallets: [],
    vestingContracts: [],
};
