import React from 'react';
import { 
    Dialog, 
    DialogTitle, 
    DialogContent, 
    DialogActions, 
    Button,
    FormControl,
    InputLabel,
    Input,
    TextareaAutosize
} from "@mui/material";
import { useState } from "react";
import { addTour } from '../../services/api';
import { Tour } from '../../shared/models/tour';

interface AddTourDialogProps {
    open: boolean
    onClose: () => void
}

function AddTourDialog({ open, onClose }: AddTourDialogProps) {
    const [formData, setFormData] = useState({
        name: '',
        country: '',
        city: '',
        description: ''
    });

    const handleFormChange = (attribute: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setFormData((previousData) => ({ ...previousData, [attribute]: value }));
    };

    const submitTour = () => {
        const tour = { ... formData } as Tour;
        addTour(tour).subscribe(_ => {
            onClose();
            setFormData({
                name: '',
                country: '',
                city: '',
                description: ''
            });
        });
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Add Tour</DialogTitle>
            <DialogContent>
                <FormControl fullWidth>
                    <InputLabel htmlFor="name">Name</InputLabel>
                    <Input 
                        id="name" 
                        value={formData.name}
                        onChange={handleFormChange('name')}
                    />
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel htmlFor="country">Country</InputLabel>
                    <Input 
                        id="country" 
                        value={formData.country}
                        onChange={handleFormChange('country')}
                    />
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel htmlFor="city">City</InputLabel>
                    <Input 
                        id="city" 
                        value={formData.city}
                        onChange={handleFormChange('city')}
                    />
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel htmlFor="description">Description</InputLabel>
                    <Input 
                        id="description" 
                        multiline 
                        minRows={3} 
                        value={formData.description}
                        onChange={handleFormChange('description')}
                    />
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} variant="outlined">
                    Close
                </Button>
                <Button onClick={submitTour} variant="contained">
                    Add Tour
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default AddTourDialog;