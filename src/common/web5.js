// // src/common/web5.js
// import React, { useState, useEffect } from "react";
// import { Web5 } from "@web5/api";

// function connectAndLog() {
//   const [web5, setWeb5] = useState(null);
//   const [did, setMyDid] = useState(null);
//   console.log({ web5 });
//   console.log({ did });

//   useEffect(() => {
//     const initWeb5 = async () => {
//       const { web5, did } = await Web5.connect();
//       setWeb5(web5);
//       setMyDid(did);

//       //   if (web5 && did) {
//       //     await configureProtocol(web5, did);
//       //     await fetchDings(web5, did);
//       //   }
//     };
//     initWeb5();
//   }, []);

// const { record } = await Web5.dwn.records.create({
//   data: JSON.stringify({
//     username: "JohnDoe",
//     wallet: "0x1234567890abcdef",
//   }),
//   message: {
//     dataFormat: "application/json",
//   },
// });
// console.log(record);
// }

// export default connectAndLog;
