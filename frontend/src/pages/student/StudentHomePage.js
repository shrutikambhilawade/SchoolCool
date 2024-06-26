// import React, { useEffect, useState } from 'react'
// import { Container, Grid, Paper, Typography } from '@mui/material'
// import { useDispatch, useSelector } from 'react-redux';
// import { calculateOverallAttendancePercentage } from '../../components/attendanceCalculator';
// import CustomPieChart from '../../components/CustomPieChart';
// import { getUserDetails } from '../../redux/userRelated/userHandle';
// import SeeNotice from '../../components/SeeNotice';
// import Subject from "../../assets/subjects.svg";
// import Assignment from "../../assets/assignment.svg";
// import { getSubjectList } from '../../redux/sclassRelated/sclassHandle';

// const StudentHomePage = () => {
//     const dispatch = useDispatch();

//     const { userDetails, currentUser, loading, response } = useSelector((state) => state.user);
//     const { subjectsList } = useSelector((state) => state.sclass);

//     const [subjectAttendance, setSubjectAttendance] = useState([]);

//     const classID = currentUser.sclassName._id

//     useEffect(() => {
//         dispatch(getUserDetails(currentUser._id, "Student"));
//         dispatch(getSubjectList(classID, "ClassSubjects"));
//     }, [dispatch, currentUser._id, classID]);

//     const numberOfSubjects = subjectsList && subjectsList.length;

//     useEffect(() => {
//         if (userDetails) {
//             setSubjectAttendance(userDetails.attendance || []);
//         }
//     }, [userDetails])

//     const overallAttendancePercentage = calculateOverallAttendancePercentage(subjectAttendance);
//     const overallAbsentPercentage = 100 - overallAttendancePercentage;

//     const chartData = [
//         { name: 'Present', value: overallAttendancePercentage },
//         { name: 'Absent', value: overallAbsentPercentage }
//     ];
//     return (
//         <>
//             <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
//                 <Grid container spacing={3}>
//                     <Grid item xs={12} md={3} lg={3}>
//                         <StyledPaper>
//                             <img src={Subject} alt="Subjects" />
//                             <Title>
//                                 Total Subjects
//                             </Title>
//                             <Data start={0} end={numberOfSubjects} duration={2.5} />
//                         </StyledPaper>
//                     </Grid>
//                     <Grid item xs={12} md={3} lg={3}>
//                         <StyledPaper>
//                             <img src={Assignment} alt="Assignments" />
//                             <Title>
//                                 Total Assignments
//                             </Title>
//                             <Data start={0} end={15} duration={2.5} />
//                         </StyledPaper>
//                     </Grid>
//                     <Grid item xs={12} md={4} lg={3}>
//                         <ChartContainer>
//                             {
//                                 response ?
//                                     <Typography variant="h6">No Attendance Found</Typography>
//                                     :
//                                     <>
//                                         {loading
//                                             ? (
//                                                 <Typography variant="h6">Loading...</Typography>
//                                             )
//                                             :
//                                             <>
//                                                 {
//                                                     subjectAttendance && Array.isArray(subjectAttendance) && subjectAttendance.length > 0 ? (
//                                                         <>
//                                                             <CustomPieChart data={chartData} />
//                                                         </>
//                                                     )
//                                                         :
//                                                         <Typography variant="h6">No Attendance Found</Typography>
//                                                 }
//                                             </>
//                                         }
//                                     </>
//                             }
//                         </ChartContainer>
//                     </Grid>
//                     <Grid item xs={12}>
//                         <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
//                             <SeeNotice />
//                         </Paper>
//                     </Grid>
//                 </Grid>
//             </Container>
//         </>
//     )
// }

// export default StudentHomePage