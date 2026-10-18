import { useState } from "react";
import { Tour } from "../shared/models/tour";
import { getTours } from "../services/api";
import { Card, CardHeader, CardContent, Typography, Grid, IconButton } from "@mui/material";
import { Add } from '@mui/icons-material';
import AddTourDialog from "../components/dialogs/AddTourDialog";

function ToursPage() {
    const [tours, setTours] = useState<Array<Tour>>([]);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const openDialog = () => {
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    getTours().subscribe((tours) => {
        setTours(tours)
    });
    return (
        <>
            <h1>Tours Page</h1>
            <IconButton onClick={openDialog}>
                <Add aria-label="add" color="primary"></Add>
            </IconButton>
            <AddTourDialog open={isDialogOpen} onClose={closeDialog} />
            <Grid container spacing={3} sx={{ p: 3 }}>
                {
                    tours.map(tour => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={tour.id}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <CardHeader title={tour.name} subheader={`${tour.city}, ${tour.country}`}/>
                                <CardContent>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {tour.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </>
    );
}

export default ToursPage;