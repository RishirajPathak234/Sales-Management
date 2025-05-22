// import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
// import { tokens } from "../../theme";
// import { mockTransactions } from "../../data/mockData";
// import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
// import EmailIcon from "@mui/icons-material/Email";
// import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";
// import TrafficIcon from "@mui/icons-material/Traffic";
// import Header from "../../components/Header";


// const Dashboard = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);

//   return (

//     <Box m="20px">
//       {/* HEADER */}
//       <Box display="flex" justifyContent="space-between" alignItems="center" >
//         <Header title="Today's Sales" subtitle="Sales Summary" />

//       </Box>

//       {/* GRID & CHARTS */}
//       <Box
//         display="grid"
//         gridTemplateColumns="repeat(12, 1fr)"
//         gridAutoRows="140px"
//         gap="20px"
//       >
        
//         {/* ROW 1 */}
//         <Box
//           gridColumn="span 3"
//           backgroundColor={colors.primary[400]}
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <StatBox
//             title="12,361"
//             subtitle="Emails Sent"
//             progress="0.75"
//             increase="+14%"
//             icon={
//               <EmailIcon
//                 sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
//               />
//             }
//           />
//         </Box>
//         <Box
//           gridColumn="span 3"
//           backgroundColor={colors.primary[400]}
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <StatBox
//             title="431,225"
//             subtitle="Sales Obtained"
//             progress="0.50"
//             increase="+21%"
//             icon={
//               <PointOfSaleIcon
//                 sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
//               />
//             }
//           />
//         </Box>
//         <Box
//           gridColumn="span 3"
//           backgroundColor={colors.primary[400]}
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <StatBox
//             title="32,441"
//             subtitle="New Clients"
//             progress="0.30"
//             increase="+5%"
//             icon={
//               <PersonAddIcon
//                 sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
//               />
//             }
//           />
//         </Box>
//         <Box
//           gridColumn="span 3"
//           backgroundColor={colors.primary[400]}
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <StatBox
//             title="1,325,134"
//             subtitle="Traffic Received"
//             progress="0.80"
//             increase="+43%"
//             icon={
//               <TrafficIcon
//                 sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
//               />
//             }
//           />
//         </Box>

//         {/* ROW 2 */}
//         <Box
//           gridColumn="span 8"
//           gridRow="span 2"
//           backgroundColor={colors.primary[400]}
//         >
//           <Box
//             mt="25px"
//             p="0 30px"
//             display="flex "
//             justifyContent="space-between"
//             alignItems="center"
//           >
//             <Box>
//               <Typography
//                 variant="h5"
//                 fontWeight="600"
//                 color={colors.grey[100]}
//               >
//                 Revenue Generated
//               </Typography>
//               <Typography
//                 variant="h3"
//                 fontWeight="bold"
//                 color={colors.greenAccent[500]}
//               >
//                 $59,342.32
//               </Typography>
//             </Box>
//             <Box>
//               <IconButton>
//                 <DownloadOutlinedIcon
//                   sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
//                 />
//               </IconButton>
//             </Box>
//           </Box>
//           <Box height="250px" m="-20px 0 0 0">
//             <LineChart isDashboard={true} />
//           </Box>
//         </Box>
//         <Box
//           gridColumn="span 4"
//           gridRow="span 2"
//           backgroundColor={colors.primary[400]}
//           overflow="auto"
//         >
//           <Box
//             display="flex"
//             justifyContent="space-between"
//             alignItems="center"
//             borderBottom={`4px solid ${colors.primary[500]}`}
//             colors={colors.grey[100]}
//             p="15px"
//           >
//             <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
//               Recent Transactions
//             </Typography>
//           </Box>
//           {mockTransactions.map((transaction, i) => (
//             <Box
//               key={`${transaction.txId}-${i}`}
//               display="flex"
//               justifyContent="space-between"
//               alignItems="center"
//               borderBottom={`4px solid ${colors.primary[500]}`}
//               p="15px"
//             >
//               <Box>
//                 <Typography
//                   color={colors.greenAccent[500]}
//                   variant="h5"
//                   fontWeight="600"
//                 >
//                   {transaction.txId}
//                 </Typography>
//                 <Typography color={colors.grey[100]}>
//                   {transaction.user}
//                 </Typography>
//               </Box>
//               <Box color={colors.grey[100]}>{transaction.date}</Box>
//               <Box
//                 backgroundColor={colors.greenAccent[500]}
//                 p="5px 10px"
//                 borderRadius="4px"
//               >
//                 ${transaction.cost}
//               </Box>
//             </Box>
//           ))}
//         </Box>

//         {/* ROW 3 */}
//         <Box
//           gridColumn="span 4"
//           gridRow="span 2"
//           backgroundColor={colors.primary[400]}
//           p="30px"
//         >
//           <Typography variant="h5" fontWeight="600">
//             Campaign
//           </Typography>
//           <Box
//             display="flex"
//             flexDirection="column"
//             alignItems="center"
//             mt="25px"
//           >
//             <ProgressCircle size="125" />
//             <Typography
//               variant="h5"
//               color={colors.greenAccent[500]}
//               sx={{ mt: "15px" }}
//             >
//               $48,352 revenue generated
//             </Typography>
//             <Typography>Includes extra misc expenditures and costs</Typography>
//           </Box>
//         </Box>
//         <Box
//           gridColumn="span 4"
//           gridRow="span 2"
//           backgroundColor={colors.primary[400]}
//         >
//           <Typography
//             variant="h5"
//             fontWeight="600"
//             sx={{ padding: "30px 30px 0 30px" }}
//           >
//             Sales Quantity
//           </Typography>
//           <Box height="250px" mt="-20px">
//             <BarChart isDashboard={true} />
//           </Box>
//         </Box>
//         <Box
//           gridColumn="span 4"
//           gridRow="span 2"
//           backgroundColor={colors.primary[400]}
//           padding="30px"
//         >
//           <Typography
//             variant="h5"
//             fontWeight="600"
//             sx={{ marginBottom: "15px" }}
//           >
//             Geography Based Traffic
//           </Typography>
//           <Box height="200px">
//             <GeographyChart isDashboard={true} />
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Dashboard;


// import { Box, Typography, useTheme } from "@mui/material";
// import { tokens } from "../../theme";
// import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
// import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
// import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
// import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";

// // StatBox Component Definition
// const StatBox = ({ title, subtitle, icon, increase }) => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);

//   // Extract the percentage color based on the first character
//   const getIncreaseColor = (text) => {
//     if (text.startsWith("+")) {
//       // Different colors based on the metric
//       if (increase.includes("10%")) return "#FFD700"; // Yellow for 10%
//       if (increase.includes("8%")) return "#4ECCA3"; // Teal for 8%
//       if (increase.includes("2%")) return "#D667CF"; // Purple for 2%
//       if (increase.includes("3%")) return "#38B2AC"; // Blue for 3%
//       return colors.greenAccent[600]; // Default green
//     }
//     return colors.redAccent[600]; // Red for negative values
//   };

//   return (
//     <Box width="100%" m="0" p="20px">
//       <Box display="flex" justifyContent="flex-start">
//         {icon}
//       </Box>
//       <Box mt="20px">
//         <Typography variant="h1" fontWeight="bold" color={colors.grey[100]}>
//           {title}
//         </Typography>
//         <Typography variant="h5" color={colors.grey[400]} mt="5px">
//           {subtitle}
//         </Typography>
//       </Box>
//       <Box mt="10px">
//         <Typography
//           variant="h6"
//           fontWeight="bold"
//           color={getIncreaseColor(increase)}
//         >
//           {increase}
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// // Progress Bar Component for Top Products
// const ProgressBar = ({ value, color }) => {
//   return (
//     <Box width="100%" height="8px" bgcolor="#2e2e3c" borderRadius="4px">
//       <Box 
//         height="100%" 
//         bgcolor={color} 
//         borderRadius="4px" 
//         width={`${value}%`}
//       />
//     </Box>
//   );
// };

// // Main Dashboard Component
// const Dashboard = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);

//   // Mock data for top products
//   const topProducts = [
//     { id: "01", name: "Home Decore Range", popularity: 78, color: "#FFB74D" },
//     { id: "02", name: "Disney Princess Dress", popularity: 62, color: "#4ECCA3" },
//     { id: "03", name: "Bathroom Essentials", popularity: 51, color: "#64B5F6" },
//     { id: "04", name: "Apple Smartwatch", popularity: 29, color: "#E57373" },
//   ];

//   // Mock data for volume chart
//   const volumeData = [75, 80, 60, 40, 85, 95];
//   const maxHeight = 190; // maximum height in pixels for the tallest bar

//   return (
//     <Box m="20px">
//       {/* TOP SALES SUMMARY SECTION */}
//       <Box 
//         sx={{ 
//           backgroundColor: colors.primary[500], 
//           borderRadius: "10px", 
//           padding: "30px",
//           mb: "20px"
//         }}
//       >
//         {/* HEADER */}
//         <Box>
//           <Typography
//             variant="h2"
//             fontWeight="bold"
//             color={colors.grey[100]}
//             mb="5px"
//           >
//             Today's Sales
//           </Typography>
//           <Typography
//             variant="h5"
//             color={colors.grey[500]}
//             mb="20px"
//           >
//             Sales Summary
//           </Typography>
//         </Box>

//         {/* GRID & CHARTS */}
//         <Box
//           display="grid"
//           gridTemplateColumns="repeat(12, 1fr)"
//           gridAutoRows="140px"
//           gap="20px"
//         >
          
//           {/* Total Sales */}
//           <Box
//             gridColumn="span 3"
//             backgroundColor={colors.primary[400]}
//             display="flex"
//             alignItems="center"
//             justifyContent="center"
//             borderRadius="10px"
//           >
//             <StatBox
//               title="$5k"
//               subtitle="Total Sales"
//               increase="+10% from yesterday"
//               icon={
//                 <BarChartOutlinedIcon
//                   sx={{ color: "#FFD700", fontSize: "26px" }}
//                 />
//               }
//             />
//           </Box>

//           {/* Total Order */}
//           <Box
//             gridColumn="span 3"
//             backgroundColor={colors.primary[400]}
//             display="flex"
//             alignItems="center"
//             justifyContent="center"
//             borderRadius="10px"
//           >
//             <StatBox
//               title="500"
//               subtitle="Total Order"
//               increase="+8% from yesterday"
//               icon={
//                 <BoltOutlinedIcon
//                   sx={{ color: "#4ECCA3", fontSize: "26px" }}
//                 />
//               }
//             />
//           </Box>

//           {/* Product Sold */}
//           <Box
//             gridColumn="span 3"
//             backgroundColor={colors.primary[400]}
//             display="flex"
//             alignItems="center"
//             justifyContent="center"
//             borderRadius="10px"
//           >
//             <StatBox
//               title="9"
//               subtitle="Product Sold"
//               increase="+2% from yesterday"
//               icon={
//                 <ShoppingBagOutlinedIcon
//                   sx={{ color: "#D667CF", fontSize: "26px" }}
//                 />
//               }
//             />
//           </Box>

//           {/* New Customer */}
//           <Box
//             gridColumn="span 3"
//             backgroundColor={colors.primary[400]}
//             display="flex"
//             alignItems="center"
//             justifyContent="center"
//             borderRadius="10px"
//           >
//             <StatBox
//               title="12"
//               subtitle="New Customer"
//               increase="+3% from yesterday"
//               icon={
//                 <PersonAddOutlinedIcon
//                   sx={{ color: "#38B2AC", fontSize: "26px" }}
//                 />
//               }
//             />
//           </Box>
//         </Box>
//       </Box>

//       {/* BOTTOM SECTIONS: LEVEL AND TOP PRODUCTS */}
//       <Box display="flex" gap="20px">
//         {/* Level Section - Bar Chart */}
//         <Box 
//           sx={{ 
//             backgroundColor: colors.primary[500], 
//             borderRadius: "10px", 
//             padding: "30px",
//             flex: 1
//           }}
//         >
//           <Typography
//             variant="h2"
//             fontWeight="bold"
//             color={colors.grey[100]}
//             mb="30px"
//           >
//             Level
//           </Typography>

//           {/* Bar Chart */}
//           <Box height="250px" display="flex" alignItems="flex-end" position="relative">
//             {volumeData.map((value, index) => (
//               <Box 
//                 key={index} 
//                 mx="18px" 
//                 display="flex" 
//                 flexDirection="column" 
//                 alignItems="center" 
//                 height="100%"
//                 justifyContent="flex-end"
//               >
//                 <Box 
//                   width="35px" 
//                   height={`${(value / 100) * maxHeight}px`} 
//                   bgcolor="#4ECCA3" 
//                   borderRadius="6px" 
//                 />
//               </Box>
//             ))}
//           </Box>
          
//           {/* Legend */}
//           <Box display="flex" justifyContent="space-between" mt="10px" px="10px">
//             <Box display="flex" alignItems="center">
//               <Box width="10px" height="10px" borderRadius="50%" bgcolor="#4ECCA3" mr="10px" />
//               <Typography color={colors.grey[300]}>Volume</Typography>
//             </Box>
//             <Typography color={colors.grey[300]}>Service</Typography>
//           </Box>
//         </Box>

//         {/* Top Products Section */}
//         <Box 
//           sx={{ 
//             backgroundColor: colors.primary[500], 
//             borderRadius: "10px", 
//             padding: "30px",
//             flex: 1
//           }}
//         >
//           <Typography
//             variant="h2"
//             fontWeight="bold"
//             color={colors.grey[100]}
//             mb="30px"
//           >
//             Top Products
//           </Typography>

//           {/* Table Header */}
//           <Box display="flex" mb="15px">
//             <Typography color={colors.grey[400]} flex="1">
//               #
//             </Typography>
//             <Typography color={colors.grey[400]} flex="3">
//               Name
//             </Typography>
//             <Typography color={colors.grey[400]} flex="3">
//               Popularity
//             </Typography>
//             <Typography color={colors.grey[400]} flex="1" textAlign="right">
//               Sales
//             </Typography>
//           </Box>

//           {/* Table Rows */}
//           {topProducts.map((product) => (
//             <Box 
//               key={product.id} 
//               display="flex" 
//               alignItems="center" 
//               mb="20px" 
//               pb="15px" 
//               borderBottom={`1px solid ${colors.primary[400]}`}
//             >
//               <Typography color={colors.grey[100]} flex="1">
//                 {product.id}
//               </Typography>
//               <Typography color={colors.grey[100]} flex="3">
//                 {product.name}
//               </Typography>
//               <Box flex="3" pr="15px">
//                 <ProgressBar value={product.popularity} color={product.color} />
//               </Box>
//               <Box 
//                 flex="1" 
//                 sx={{ 
//                   border: `1px solid ${product.color}`, 
//                   borderRadius: "4px", 
//                   padding: "5px 10px", 
//                   textAlign: "center",
//                   color: colors.grey[100]
//                 }}
//               >
//                 {product.popularity}%
//               </Box>
//             </Box>
//           ))}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Dashboard;

// "use client"

// import { Box, Typography, useTheme } from "@mui/material"
// import { tokens } from "../../theme"
// import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined"
// import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined"
// import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined"
// import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined"



// // StatBox Component Definition
// const StatBox = ({ title, subtitle, icon, increase }) => {
//   const theme = useTheme()
//   const colors = tokens(theme.palette.mode)

//   // Extract the percentage color based on the first character
//   const getIncreaseColor = (text) => {
//     if (text.startsWith("+")) {
//       // Different colors based on the metric
//       if (increase.includes("10%")) return "#FFD700" // Yellow for 10%
//       if (increase.includes("8%")) return "#4ECCA3" // Teal for 8%
//       if (increase.includes("2%")) return "#D667CF" // Purple for 2%
//       if (increase.includes("3%")) return "#38B2AC" // Blue for 3%
//       return colors.greenAccent[600] // Default green
//     }
//     return colors.redAccent[600] // Red for negative values
//   }

//   return (
//     <Box width="100%" m="0" p="20px">
//       <Box display="flex" justifyContent="flex-start">
//         {icon}
//       </Box>
//       <Box mt="20px">
//         <Typography variant="h1" fontWeight="bold" color={colors.grey[100]}>
//           {title}
//         </Typography>
//         <Typography variant="h5" color={colors.grey[400]} mt="5px">
//           {subtitle}
//         </Typography>
//       </Box>
//       <Box mt="10px">
//         <Typography variant="h6" fontWeight="bold" color={getIncreaseColor(increase)}>
//           {increase}
//         </Typography>
//       </Box>
//     </Box>
//   )
// }

// // Progress Bar Component for Top Products
// const ProgressBar = ({ value, color }) => {
//   return (
//     <Box width="100%" height="8px" bgcolor="#181818" borderRadius="4px">
//       <Box height="100%" bgcolor={color} borderRadius="4px" width={`${value}%`} />
//     </Box>
//   )
// }

// // Main Dashboard Component
// const Dashboard = () => {
//   const theme = useTheme()
//   const colors = tokens(theme.palette.mode)

//   // Mock data for top products
//   const topProducts = [
//     { id: "01", name: "Home Decore Range", popularity: 78, color: "#FFB74D" },
//     { id: "02", name: "Disney Princess Dress", popularity: 62, color: "#4ECCA3" },
//     { id: "03", name: "Bathroom Essentials", popularity: 51, color: "#64B5F6" },
//     { id: "04", name: "Apple Smartwatch", popularity: 29, color: "#E57373" },
//   ]

//   // Mock data for volume chart
//   const volumeData = [100, 80, 60, 40, 85, 95]
//   const maxHeight = 190 // maximum height in pixels for the tallest bar

//   return (
//     <>
//       {/* TOP SALES SUMMARY SECTION */}
//       <Box
//         sx={{
//           backgroundColor: "#181818",
//           borderRadius: "15px",
//           padding: "20px",
//           margin: "0 auto",
//           width: "98%",
//           mb: "20px",
     
//         }}
//       >
//         {/* HEADER */}
//         <Box width="100%" mb="20px" p="20px" >
//           <Box>
//             <Typography variant="h2" fontWeight="bold" color={colors.grey[100]} mb="5px">
//               Today's Sales
//             </Typography>
//             <Typography variant="h5" color={colors.grey[400]} mb="20px">
//               Sales Summary
//             </Typography>
//           </Box>

//           {/* GRID & CHARTS */}
//           <Box display="grid"  gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="200px" gap="20px">
//             {/* Total Sales */}
//             <Box
//               gridColumn="span 3"
//               backgroundColor="#060609"
//               display="flex"
//               alignItems="center"
//               justifyContent="center"
//               borderRadius="15px"
//             >
//               <StatBox
//                 title="$5k"
//                 subtitle="Total Sales"
//                 increase="+10% from yesterday"
//                 icon={<BarChartOutlinedIcon sx={{ color: "#FFD700", fontSize: "26px" }} />}
//               />
//             </Box>

//             {/* Total Order */}
//             <Box
//               gridColumn="span 3"
//               backgroundColor="#060609"
//               display="flex"
//               alignItems="center"
//               justifyContent="center"
//               borderRadius="15px"
//             >
//               <StatBox
//                 title="500"
//                 subtitle="Total Order"
//                 increase="+8% from yesterday"
//                 icon={<BoltOutlinedIcon sx={{ color: "#4ECCA3", fontSize: "26px" }} />}
//               />
//             </Box>

//             {/* Product Sold */}
//             <Box
//               gridColumn="span 3"
//               backgroundColor="#060609"
//               display="flex"
//               alignItems="center"
//               justifyContent="center"
//               borderRadius="15px"
//             >
//               <StatBox
//                 title="9"
//                 subtitle="Product Sold"
//                 increase="+2% from yesterday"
//                 icon={<ShoppingBagOutlinedIcon sx={{ color: "#D667CF", fontSize: "26px" }} />}
//               />
//             </Box>

//             {/* New Customer */}
//             <Box
//               gridColumn="span 3"
//               backgroundColor="#060609"
//               display="flex"
//               alignItems="center"
//               justifyContent="center"
//               borderRadius="15px"
//             >
//               <StatBox
//                 title="12"
//                 subtitle="New Customer"
//                 increase="+3% from yesterday"
//                 icon={<PersonAddOutlinedIcon sx={{ color: "#38B2AC", fontSize: "26px" }} />}
//               />
//             </Box>
//           </Box>
//         </Box>
//       </Box>

//       {/* BOTTOM SECTIONS: LEVEL AND TOP PRODUCTS */}
//         <Box display="flex" gap="20px">
//           {/* Level Section - Bar Chart */}
//           <Box
//             sx={{
//               backgroundColor: "#181818",
//               borderRadius: "10px",
//               padding: "30px",
//               flex: 1,
//               width: "45%",
//               ml: "13px",
//             }}
//           >
//             <Typography variant="h2" fontWeight="bold" color={colors.grey[100]} mb="30px">
//               Level
//             </Typography>

            
//             {/* <Box height="250px" display="flex" alignItems="flex-end" position="relative">
//               {volumeData.map((value, index) => (
//                 <Box
//                   key={index}
//                   mx="18px"
//                   display="flex"
//                   flexDirection="column"
//                   alignItems="center"
//                   height="100%"
//                   justifyContent="flex-end"
//                 >

//                   // LINES BAR
//                   <Box width="35px" height={`${(value / 100) * maxHeight}px`} bgcolor="#4ECCA3" borderRadius="6px" />
//                 </Box>
//               ))}
//             </Box> */}

//             {/* Legend */}
        
//         </Box>

//         {/* Top Products Section */}
//         <Box
//           sx={{
//             backgroundColor: "#181818",
//             borderRadius: "15px",
//             padding: "30px",
//             flex: 2,
//             mr: "13px",
//           }}
//         >
//           <Typography variant="h2" fontWeight="bold" color={colors.grey[100]} mb="30px">
//             Top Products
//           </Typography>

//           {/* Table Header */}
//           <Box display="flex" mb="15px">
//             <Typography color="#9e9eb1" flex="1">
//               #
//             </Typography>
//             <Typography color="#9e9eb1" flex="3">
//               Name
//             </Typography>
//             <Typography color="#9e9eb1" flex="3">
//               Popularity
//             </Typography>
//             <Typography color="#9e9eb1" flex="1" textAlign="right">
//               Sales
//             </Typography>
//           </Box>
         

//           {/* Table Rows */}
//           {topProducts.map((product) => (
//             <Box
//               key={product.id}
//               display="flex"
//               alignItems="center"
//               mb="20px"
//               pb="15px"
//               borderBottom={`1px solid #2e2e3c`}
//             >
//               <Typography color={colors.grey[100]} flex="1">
//                 {product.id}
//               </Typography>
//               <Typography color={colors.grey[100]} flex="3">
//                 {product.name}
//               </Typography>
//               <Box flex="3" pr="15px">
//                 <ProgressBar value={product.popularity} color={product.color} />
//               </Box>
//               <Box
//                 flex="1"
//                 sx={{
//                   border: `1px solid ${product.color}`,
//                   borderRadius: "4px",
//                   padding: "5px 10px",
//                   textAlign: "center",
//                   color: colors.grey[100],
//                 }}
//               >
//                 {product.popularity}%
//               </Box>
//             </Box>
//           ))}
//         </Box>
//       </Box>
//     </>

    
//   )
// }



// export default Dashboard


// "use client"

// import { Box, Typography, useTheme } from "@mui/material"
// import { tokens } from "../../theme"
// import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined"
// import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined"
// import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined"
// import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined"
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

// // StatBox Component Definition
// const StatBox = ({ title, subtitle, icon, increase }) => {
//   const theme = useTheme()
//   const colors = tokens(theme.palette.mode)

//   // Extract the percentage color based on the first character
//   const getIncreaseColor = (text) => {
//     if (text.startsWith("+")) {
//       // Different colors based on the metric
//       if (increase.includes("10%")) return "#FFD700" // Yellow for 10%
//       if (increase.includes("8%")) return "#4ECCA3" // Teal for 8%
//       if (increase.includes("2%")) return "#D667CF" // Purple for 2%
//       if (increase.includes("3%")) return "#38B2AC" // Blue for 3%
//       return colors.greenAccent[600] // Default green
//     }
//     return colors.redAccent[600] // Red for negative values
//   }

//   return (
//     <Box width="100%" m="0" p="20px">
//       <Box display="flex" justifyContent="flex-start">
//         {icon}
//       </Box>
//       <Box mt="20px">
//         <Typography variant="h1" fontWeight="bold" color={colors.grey[100]}>
//           {title}
//         </Typography>
//         <Typography variant="h5" color={colors.grey[400]} mt="5px">
//           {subtitle}
//         </Typography>
//       </Box>
//       <Box mt="10px">
//         <Typography variant="h6" fontWeight="bold" color={getIncreaseColor(increase)}>
//           {increase}
//         </Typography>
//       </Box>
//     </Box>
//   )
// }

// // Progress Bar Component for Top Products
// const ProgressBar = ({ value, color }) => {
//   return (
//     <Box width="100%" height="8px" bgcolor="#181818" borderRadius="4px">
//       <Box height="100%" bgcolor={color} borderRadius="4px" width={`${value}%`} />
//     </Box>
//   )
// }

// // Main Dashboard Component
// const Dashboard = () => {
//   const theme = useTheme()
//   const colors = tokens(theme.palette.mode)

//   // Mock data for top products
//   const topProducts = [
//     { id: "01", name: "Home Decore Range", popularity: 78, color: "#FFB74D" },
//     { id: "02", name: "Disney Princess Dress", popularity: 62, color: "#4ECCA3" },
//     { id: "03", name: "Bathroom Essentials", popularity: 51, color: "#64B5F6" },
//     { id: "04", name: "Apple Smartwatch", popularity: 29, color: "#E57373" },
//   ]

//   // Mock data for volume chart - formatted for Recharts
//   const volumeData = [
//     { level: 'level 1', Service: 78, Volume: 79 },
//     { level: 'level 2', Service: 78, Volume: 79 },
//     { level: 'level 3', Service: 92, Volume: 65 },
//     { level: 'level 4', Service: 114, Volume: 43 },
//     { level: 'level 5', Service: 75, Volume: 82 },
//     { level: 'level 6', Service: 52, Volume: 105 },
//   ]

//   return (
//     <>
//       {/* TOP SALES SUMMARY SECTION */}
//       <Box
//         sx={{
//           backgroundColor: "#181818",
//           borderRadius: "15px",
//           padding: "20px",
//           margin: "0 auto",
//           width: "98%",
//           mb: "20px",
     
//         }}
//       >
//         {/* HEADER */}
//         <Box width="100%" mb="20px" p="20px" >
//           <Box>
//             <Typography variant="h2" fontWeight="bold" color={colors.grey[100]} mb="5px">
//               Today's Sales
//             </Typography>
//             <Typography variant="h5" color={colors.grey[400]} mb="20px">
//               Sales Summary
//             </Typography>
//           </Box>

//           {/* GRID & CHARTS */}
//           <Box display="grid"  gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="200px" gap="20px">
//             {/* Total Sales */}
//             <Box
//               gridColumn="span 3"
//               backgroundColor="#060609"
//               display="flex"
//               alignItems="center"
//               justifyContent="center"
//               borderRadius="15px"
//             >
//               <StatBox
//                 title="$5k"
//                 subtitle="Total Sales"
//                 increase="+10% from yesterday"
//                 icon={<BarChartOutlinedIcon sx={{ color: "#FFD700", fontSize: "26px" }} />}
//               />
//             </Box>

//             {/* Total Order */}
//             <Box
//               gridColumn="span 3"
//               backgroundColor="#060609"
//               display="flex"
//               alignItems="center"
//               justifyContent="center"
//               borderRadius="15px"
//             >
//               <StatBox
//                 title="500"
//                 subtitle="Total Order"
//                 increase="+8% from yesterday"
//                 icon={<BoltOutlinedIcon sx={{ color: "#4ECCA3", fontSize: "26px" }} />}
//               />
//             </Box>

//             {/* Product Sold */}
//             <Box
//               gridColumn="span 3"
//               backgroundColor="#060609"
//               display="flex"
//               alignItems="center"
//               justifyContent="center"
//               borderRadius="15px"
//             >
//               <StatBox
//                 title="9"
//                 subtitle="Product Sold"
//                 increase="+2% from yesterday"
//                 icon={<ShoppingBagOutlinedIcon sx={{ color: "#D667CF", fontSize: "26px" }} />}
//               />
//             </Box>

//             {/* New Customer */}
//             <Box
//               gridColumn="span 3"
//               backgroundColor="#060609"
//               display="flex"
//               alignItems="center"
//               justifyContent="center"
//               borderRadius="15px"
//             >
//               <StatBox
//                 title="12"
//                 subtitle="New Customer"
//                 increase="+3% from yesterday"
//                 icon={<PersonAddOutlinedIcon sx={{ color: "#38B2AC", fontSize: "26px" }} />}
//               />
//             </Box>
//           </Box>
//         </Box>
//       </Box>

//       {/* BOTTOM SECTIONS: LEVEL AND TOP PRODUCTS */}
//         <Box display="flex" gap="20px">
//           {/* Level Section - Bar Chart */}
//           <Box
//             sx={{
//               backgroundColor: "#181818",
//               borderRadius: "15px",
//               padding: "30px",
//               flex: 1,
//               width: "45%",
//               ml: "13px",
//               mb: "100px",
//             }}
//           >
//             <Typography variant="h2" fontWeight="bold" color={colors.grey[100]} mb="30px">
//               Level
//             </Typography>

//             {/* Recharts Stacked Bar Chart */}
//             <Box height="300px" width="400px">
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart
//                   data={volumeData}
//                   margin={{
//                     left: -20,
//                   }}
//                 >
//                   <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333333" />
//                   <XAxis  stroke="#9e9e9e" />
//                   <YAxis stroke="#9e9e9e" />
//                   <Tooltip
//                     contentStyle={{
//                       backgroundColor: "#2d2d2d",
//                       border: "none",
//                       borderRadius: "15px",
//                       color: "#ffffff",
//                     }}
//                   />
//                   <Bar dataKey="Volume" stackId="a" fill="#4ECCA3" radius={[6, 6, 0, 0]} barSize={35} />
//                   <Bar dataKey="Service" stackId="a" fill="#FFC107" radius={[6, 6, 0, 0]} barSize={35} />
//                 </BarChart>
//               </ResponsiveContainer>
//             </Box>

//             {/* Legend */}
        
//         </Box>

//         {/* Top Products Section */}
//         <Box
//           sx={{
//             backgroundColor: "#181818",
//             borderRadius: "15px",
//             padding: "30px",
//             flex: 2,
//             mr: "13px",
//             mb: "100px",
//           }}
//         >
//           <Typography variant="h2" fontWeight="bold" color={colors.grey[100]} mb="30px">
//             Top Products
//           </Typography>

//           {/* Table Header */}
//           <Box display="flex" mb="15px">
//             <Typography color="#9e9eb1" flex="1">
//               #
//             </Typography>
//             <Typography color="#9e9eb1" flex="3">
//               Name
//             </Typography>
//             <Typography color="#9e9eb1" flex="3">
//               Popularity
//             </Typography>
//             <Typography color="#9e9eb1" flex="1" textAlign="right">
//               Sales
//             </Typography>
//           </Box>
         

//           {/* Table Rows */}
//           {topProducts.map((product) => (
//             <Box
//               key={product.id}
//               display="flex"
//               alignItems="center"
//               mb="20px"
//               pb="15px"
//               borderBottom={`1px solid #2e2e3c`}
//             >
//               <Typography color={colors.grey[100]} flex="1">
//                 {product.id}
//               </Typography>
//               <Typography color={colors.grey[100]} flex="3">
//                 {product.name}
//               </Typography>
//               <Box flex="3" pr="15px">
//                 <ProgressBar value={product.popularity} color={product.color} />
//               </Box>
//               <Box
//                 flex="1"
//                 sx={{
//                   border: `1px solid ${product.color}`,
//                   borderRadius: "4px",
//                   padding: "5px 10px",
//                   textAlign: "center",
//                   color: colors.grey[100],
//                 }}
//               >
//                 {product.popularity}%
//               </Box>
//             </Box>
//           ))}
//         </Box>
//       </Box>
//     </>
//   )
// }



// export default Dashboard


"use client"

import { Box, Typography, useTheme } from "@mui/material"
import { tokens } from "../../theme"
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined"
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined"
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined"
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Area, AreaChart, PieChart, Pie, Cell } from "recharts"


// StatBox Component Definition
const StatBox = ({ title, subtitle, icon, increase }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  // Extract the percentage color based on the first character
  const getIncreaseColor = (text) => {
    if (text.startsWith("+")) {
      // Different colors based on the metric
      if (increase.includes("10%")) return "#FFD700" // Yellow for 10%
      if (increase.includes("8%")) return "#4ECCA3" // Teal for 8%
      if (increase.includes("2%")) return "#D667CF" // Purple for 2%
      if (increase.includes("3%")) return "#38B2AC" // Blue for 3%
      return colors.greenAccent[600] // Default green
    }
    return colors.redAccent[600] // Red for negative values
  }

  return (
    <Box width="100%" m="0" p="20px">
      <Box display="flex" justifyContent="flex-start">
        {icon}
      </Box>
      <Box mt="20px">
        <Typography variant="h1" fontWeight="bold" color={colors.grey[100]}>
          {title}
        </Typography>
        <Typography variant="h5" color={colors.grey[400]} mt="5px">
          {subtitle}
        </Typography>
      </Box>
      <Box mt="10px">
        <Typography variant="h6" fontWeight="bold" color={getIncreaseColor(increase)}>
          {increase}
        </Typography>
      </Box>
    </Box>
  )
}

// Progress Bar Component for Top Products
const ProgressBar = ({ value, color }) => {
  return (
    <Box width="100%" height="8px" bgcolor="#181818" borderRadius="4px">
      <Box height="100%" bgcolor={color} borderRadius="4px" width={`${value}%`} />
    </Box>
  )
}

// Main Dashboard Component
const Dashboard = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  // Mock data for top products
  const topProducts = [
    { id: "01", name: "Home Decore Range", popularity: 78, color: "#FFB74D" },
    { id: "02", name: "Disney Princess Dress", popularity: 62, color: "#4ECCA3" },
    { id: "03", name: "Bathroom Essentials", popularity: 51, color: "#64B5F6" },
    { id: "04", name: "Apple Smartwatch", popularity: 29, color: "#E57373" },
  ]

  // Mock data for volume chart - formatted for Recharts
  const volumeData = [
    { level: "level 1", Service: 78, Volume: 79 },
    { level: "level 2", Service: 78, Volume: 79 },
    { level: "level 3", Service: 92, Volume: 65 },
    { level: "level 4", Service: 114, Volume: 43 },
    { level: "level 5", Service: 75, Volume: 82 },
    { level: "level 6", Service: 52, Volume: 105 },
  ]

  return (
    <>
      {/* TOP SALES SUMMARY SECTION */}
      <Box
        sx={{
          backgroundColor: "#181818",
          borderRadius: "15px",
          padding: "20px",
          margin: "0 auto",
          width: "98%",
          mb: "20px",
          boxShadow: "0 2px 12px 0 rgba(0,0,0,0.7)",
        }}
      >
        {/* HEADER */}
        <Box width="100%" mb="20px" p="20px">
          <Box>
            <Typography variant="h2" fontWeight="bold" color={colors.grey[100]} mb="5px">
              Today's Sales
            </Typography>
            <Typography variant="h5" color={colors.grey[400]} mb="20px">
              Sales Summary
            </Typography>
          </Box>

          {/* GRID & CHARTS */}
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="200px" gap="20px">
            {/* Total Sales */}
            <Box
              gridColumn="span 3"
              backgroundColor="#060609"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="15px"
            >
              <StatBox
                title="$5k"
                subtitle="Total Sales"
                increase="+10% from yesterday"
                icon={<BarChartOutlinedIcon sx={{ color: "#FFD700", fontSize: "26px" }} />}
              />
            </Box>

            {/* Total Order */}
            <Box
              gridColumn="span 3"
              backgroundColor="#060609"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="15px"
            >
              <StatBox
                title="500"
                subtitle="Total Order"
                increase="+8% from yesterday"
                icon={<BoltOutlinedIcon sx={{ color: "#4ECCA3", fontSize: "26px" }} />}
              />
            </Box>

            {/* Product Sold */}
            <Box
              gridColumn="span 3"
              backgroundColor="#060609"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="15px"
            >
              <StatBox
                title="9"
                subtitle="Product Sold"
                increase="+2% from yesterday"
                icon={<ShoppingBagOutlinedIcon sx={{ color: "#D667CF", fontSize: "26px" }} />}
              />
            </Box>

            {/* New Customer */}
            <Box
              gridColumn="span 3"
              backgroundColor="#060609"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="15px"
            >
              <StatBox
                title="12"
                subtitle="New Customer"
                increase="+3% from yesterday"
                icon={<PersonAddOutlinedIcon sx={{ color: "#38B2AC", fontSize: "26px" }} />}
              />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* BOTTOM SECTIONS: LEVEL AND TOP PRODUCTS */}
      <Box display="flex" gap="20px">
     
          <Box
            sx={{
              backgroundColor: "#181818",
              borderRadius: "15px",
              padding: "30px",
              flex: 1,
              width: "45%",
              ml: "13px",
              mb: "20px",
             boxShadow: "0 2px 12px 0 rgba(0,0,0,0.7)",
            }}
          >
            <Typography variant="h2" fontWeight="bold" color={colors.grey[100]} mb="30px">
              Level
            </Typography>

            {/* Recharts Stacked Bar Chart */}
          <Box height="300px" width="400px">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={volumeData}
                margin={{
                  left: -20,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333333" />
                <XAxis stroke="#9e9e9e" />
                <YAxis stroke="#9e9e9e" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#2d2d2d",
                    border: "none",
                    borderRadius: "15px",
                    color: "#ffffff",
                  }}
                />
                <Bar dataKey="Volume" stackId="a" fill="#4ECCA3" radius={[6, 6, 0, 0]} barSize={35} />
                <Bar dataKey="Service" stackId="a" fill="#FFC107" radius={[6, 6, 0, 0]} barSize={35} />
              </BarChart>
            </ResponsiveContainer>
          </Box>

          {/* Legend */}
        </Box>

       
          <Box
            sx={{
              backgroundColor: "#181818",
              borderRadius: "15px",
              padding: "30px",
              flex: 2,
              mr: "13px",
              mb: "20px",
              boxShadow: "0 2px 12px 0 rgba(0,0,0,0.7)",
            
            }}
          >
            <Typography variant="h2" fontWeight="bold" color={colors.grey[100]} mb="30px">
              Top Products
            </Typography>

            {/* Table Header */}
          <Box display="flex" mb="15px">
            <Typography color="#9e9eb1" flex="1">
              #
            </Typography>
            <Typography color="#9e9eb1" flex="3">
              Name
            </Typography>
            <Typography color="#9e9eb1" flex="3">
              Popularity
            </Typography>
            <Typography color="#9e9eb1" flex="1" textAlign="right">
              Sales
            </Typography>
          </Box>

          {/* Table Rows */}
          {topProducts.map((product) => (
            <Box
              key={product.id}
              display="flex"
              alignItems="center"
              mb="20px"
              pb="15px"
              borderBottom={`1px solid #2e2e3c`}
            >
              <Typography color={colors.grey[100]} flex="1">
                {product.id}
              </Typography>
              <Typography color={colors.grey[100]} flex="3">
                {product.name}
              </Typography>
              <Box flex="3" pr="15px">
                <ProgressBar value={product.popularity} color={product.color} />
              </Box>
              <Box
                flex="1"
                sx={{
                  border: `1px solid ${product.color}`,
                  borderRadius: "4px",
                  padding: "5px 10px",
                  textAlign: "center",
                  color: colors.grey[100],
                }}
              >
                {product.popularity}%
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* THIRD ROW: CUSTOMER FULFILLMENT AND EARNINGS */}
      <Box display="flex" gap="20px" mb="10px">
        {/* Customer Fulfillment Section */}
        <Box
          sx={{
            backgroundColor: "#181818",
            borderRadius: "15px",
            padding: "30px",
            flex: 1,
            width: "45%",
            ml: "13px",
            mb: "20px",
            boxShadow: "0 2px 12px 0 rgba(0,0,0,0.7)",
          }}
        >
          <Typography variant="h2" fontWeight="bold" color={colors.grey[100]} mb="20px">
            Customer Fulfillment
          </Typography>

          {/* Line Chart */}
          <Box height="300px" width="100%">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={[
                  { name: "Sun", thisMonth: 615, lastMonth: 512 },  //
                  { name: "Mon", thisMonth: 550, lastMonth: 350 },
                  { name: "Tues", thisMonth: 795, lastMonth: 221 },//
                  { name: "Wed", thisMonth: 960, lastMonth: 784 }, //
                  { name: "Thurs", thisMonth: 750, lastMonth: 605 },
                  { name: "Fri", thisMonth: 595, lastMonth: 731 },
                  { name: "Sat", thisMonth: 660, lastMonth: 272 }, //
                  { name: "Sun", thisMonth: 615, lastMonth: 512 }, //
                ]}
                margin={{ top: 5, right: 30, left: 20, bottom: 1 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333333" />
                <XAxis dataKey="name" stroke="#9e9e9e" />
                <YAxis stroke="#9e9e9e" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#2d2d2d",
                    border: "none",
                    borderRadius: "15px",
                    color: "#ffffff",
                  }}
                />
                <defs>
                  <linearGradient id="colorThisMonth" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#98FF98" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0.2} />
                  </linearGradient>
                  <linearGradient id="colorLastMonth" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FFC0CB" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#FFC0CB" stopOpacity={0.2} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="thisMonth"
                  stroke="#ffffff"
                  fillOpacity={1}
                  fill="url(#colorThisMonth)"
                />
                <Area
                  type="monotone"
                  dataKey="lastMonth"
                  stroke="#ffffff"
                  fillOpacity={1}
                  fill="url(#colorLastMonth)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </Box>

          {/* Legend */}
          <Box display="flex" justifyContent="space-between" mt="20px">
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box display="flex" alignItems="center">
                <Box width="12px" height="12px" borderRadius="50%" bgcolor="#8884d8" mr="8px" />
                <Typography color={colors.grey[100]}>This Month</Typography>
              </Box>
              <Typography color={colors.grey[100]} mt="4px" fontSize="14px">
                $4,785
              </Typography>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box display="flex" alignItems="center">
                <Box width="12px" height="12px" borderRadius="50%" bgcolor="#82ca9d" mr="8px" />
                <Typography color={colors.grey[100]}>Last Month</Typography>
              </Box>
              <Typography color={colors.grey[100]} mt="4px" fontSize="14px">
                $4,029
              </Typography>
            </Box>
          </Box>
          </Box>

          {/* Earnings Section */}
        <Box
          sx={{
            backgroundColor: "#181818",
            borderRadius: "15px",
            padding: "30px",
            flex: 1,
            mr: "13px",
            mb: "20px",
            boxShadow: "0 2px 12px 0 rgba(0,0,0,0.7)",
          }}
        >
          <Typography variant="h2" fontWeight="bold" color={colors.grey[100]} mb="10px">
            Earnings
          </Typography>
          <Typography variant="h5" color={colors.grey[400]} mb="20px">
            Total Expense
          </Typography>

          <Typography variant="h1" fontWeight="bold" color="#4ECCA3" mb="10px">
            $6078.76
          </Typography>
          <Typography variant="h5" color={colors.grey[400]} mb="30px">
            Profit is 48% More than last Month
          </Typography>

          {/* Gauge Chart */}
          <Box display="flex" justifyContent="center" height="250px" width="100%">
            <ResponsiveContainer width="100%" height="150%">
              <PieChart>
                <Pie
                  data={[
                    { name: "Filled", value: 80 },
                    { name: "Empty", value: 20 },
                  ]}
                  cx="50%"
                  cy="50%"
                  startAngle={180}
                  endAngle={0}
                  innerRadius={100}
                  outerRadius={160}
                  paddingAngle={3}
                  dataKey="value"
                >
                  <Cell fill="#4ECCA3" />
                  <Cell fill="gray" />
                </Pie>
                <text
                  x="50%"
                  y="47%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#ffffff"
                  fontSize="64px"
                  fontWeight="bold"
                >
                  80%
                </text>
              </PieChart>
            </ResponsiveContainer>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Dashboard
