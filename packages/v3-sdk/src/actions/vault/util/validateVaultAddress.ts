const validateVaultAddress = (vaultAddress: string) => {
  if (!vaultAddress) {
    throw new Error('Vault address is required')
  }

  return vaultAddress.toLowerCase()
}


export default validateVaultAddress
