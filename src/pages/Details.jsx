import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useAxios from "../services/useAxios";
import { Box, Typography, Avatar, CircularProgress, Card, CardContent, Grid } from "@mui/material";
import { useEmployeeStatus } from "../hooks/useEmployeeStatus";
import ErrorPage from "./ErrorPage";
import Button from "@mui/material/Button";
import ButtonUsage from "../components/Button/Button";

const Details = () => {
  const { id } = useParams(); // Get the employee ID from the URL
  const navigate = useNavigate();
  const { get, loading } = useAxios("http://localhost:3001");
  const [employee, setEmployee] = useState(null);
  const { yearsWorked, monthsWorked, daysUntilNextAnniversary } = useEmployeeStatus(employee?.startDate || null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const data = await get(`employees/${id}`);


        setEmployee(data);
      } catch (error) {
        console.error("Error fetching employee details:", error);

      }
    };

    fetchEmployee();
  }, []);

  if (!employee) {
    return (
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}>
        <CircularProgress />
      </Box>
    );
  }
  if (!employee && loading) {
    return <ErrorPage />;
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f4f6f8",
        padding: 4,
        flexDirection: "column",
      }}
    >

      <Card
        sx={{
          maxWidth: "1000px",
          width: "100%",
          padding: 4,
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#ffffff",
        }}
      >
        {/* Avatar Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 4,
          }}
        >
          <Avatar
            src={`https://robohash.org/${encodeURIComponent(employee.name)}?set=set5`}
            alt={`${employee.name}'s avatar`}
            sx={{
              width: 200,
              height: 200,
              border: "4px solid #1976d2",
            }}
          />
          <Typography
            variant="h6"
            sx={{
              marginTop: 2,
              color: "#1976d2",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {employee.name}
          </Typography>
        </Box>

        {/* Details Section */}
        <Grid container spacing={2}>
          {/* Left Column */}
          <Grid item xs={6}>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "#1976d2",
              }}
            >
              Role
            </Typography>
            <Typography variant="body2">{employee.role}</Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "#1976d2",
                marginTop: 2,
              }}
            >
              Sector
            </Typography>
            <Typography variant="body2">{employee.sector}</Typography>
          </Grid>

          {/* Right Column */}
          <Grid item xs={6}>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "#1976d2",
              }}
            >
              Email
            </Typography>
            <Typography variant="body2">{employee.email}</Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "#1976d2",
                marginTop: 2,
              }}
            >
              Start Date
            </Typography>
            <Typography variant="body2">{employee.startDate}</Typography>
          </Grid>
        </Grid>

        {/* Back button */}
        <Box
          sx={{
            position: "relative", // Makes it relative to the card
            top: -120,              // Distance from the top
            right: -85,            // Distance from the right
            zIndex: 1,            // Ensure it stays above other content
          }}
        >
          <ButtonUsage
            variant="outlined"
            color="secondary"
            onClick={() => navigate("/employees")}
            text={
              <Typography variant="body1"
                sx={{ fontWeight: "bold" }}>Back</Typography>
            }
          />
        </Box>
        {/* Years, Months, Days Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 0,
            width: 200,
            height: 200,
            justifyContent: "space-evenly"
          }}
        >

          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              color: "#444a",
              textAlign: "center",
              marginBottom: 1,
            }}
          >
            Years Worked
          </Typography>
          <Typography variant="body1" sx={{ color: "#333" }}>
            {yearsWorked}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              color: "#1976d2",
              textAlign: "center",
              marginTop: 3,
              marginBottom: 1,
            }}
          >
            Days Until Next Anniversary
          </Typography>
          <Typography variant="h4" sx={{ color: "#333" }}>
            {daysUntilNextAnniversary}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default Details;