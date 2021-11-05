interface generatorInputs {
  name: string;
  symbol: string;
  decimals: number;
  initialSupply: number;
}

export let generate = ({
  name,
  symbol,
  decimals,
  initialSupply,
}: generatorInputs) => {
  const toCamelCase = (string: string) => {
    return string.replace(/\s+(.)/g, function (match: any, group: any) {
      return group.toUpperCase();
    });
  };

  const contractName = toCamelCase(name);
  window.location.href = "#result";

  return {
    data: `// SPDX-License-Identifier: MIT
  pragma solidity >=0.4.16 <0.9.0;
  
  import 'https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol';
  
  contract ${contractName}  is ERC20{
      address public admin;
      constructor() ERC20('${name}', '${symbol}') {
          _mint(msg.sender, ${initialSupply} * 10 ** ${decimals});
          admin = msg.sender;
      }
      
      function mint(address to, uint amount) external {
          require(msg.sender == admin, 'only admin');
          _mint(to, amount);
      }
      
      function burn(uint amount) external {
          _burn(msg.sender, amount);
      }
  }`,
    fileName: `${contractName}.sol`,
  };
};
