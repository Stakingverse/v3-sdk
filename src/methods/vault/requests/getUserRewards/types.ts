type UserReward = {
  date: number
  sumRewards: number
  dailyRewards: number
  dailyRewardsEur: number
  dailyRewardsGbp: number
  dailyRewardsUsd: number
}

export type ModifyUserReward = {
  days: Record<number, UserReward>
}
