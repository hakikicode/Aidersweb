
    import React from 'react';

    

    import { Img, Text } from "components"
  
  

    

    

    

    const NFTsMarketPageColumnone = (props) => {
      

      

      

      return (<><div
  className={props.className}
  

  
  ><div
  className="flex flex-row gap-6 items-center justify-start md:ml-[0] ml-[19px] w-auto"
  
  
  ><Text
    className="capitalize text-4xl sm:text-[32px] md:text-[34px] text-gray-500 tracking-[0.18px] w-auto"
    size="txtUbuntuMedium36"
    
    
  >{props?.one}</Text><div
  className="flex flex-row gap-6 items-start justify-start w-auto"
  
  
  ><Img className="h-20 md:h-auto rounded-[50%] w-20" src="images/img_ellipse11.png" alt="ellipseEleven" /><div
  className="flex flex-col gap-[18px] items-start justify-start w-auto"
  

  
  ><Text
    className="capitalize text-blue_gray-800 text-lg tracking-[0.09px] w-auto"
    size="txtUbuntuMedium18Bluegray800"
    
    
  >{props?.boredapeyatch}</Text><Text
    className="capitalize text-gray-500 text-lg tracking-[0.09px] w-auto"
    size="txtUbuntuMedium18Gray500"
    
    
  >{props?.2000000eth}</Text></div></div></div></div></>);
    };

    NFTsMarketPageColumnone.defaultProps = {one: "#1", boredapeyatch: "Bored Ape Yatch Club", 2000000eth: "20.00000ETH"};
  

    export default NFTsMarketPageColumnone;
  