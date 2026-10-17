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

interface AddTourDialogProps {
    open: boolean
    onClose: () => void
}

function AddTourDialog({ open, onClose }: AddTourDialogProps) {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Add Tour</DialogTitle>
            <DialogContent>
                <FormControl fullWidth>
                    <InputLabel htmlFor="name">Name</InputLabel>
                    <Input id="name"/>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel htmlFor="country">Country</InputLabel>
                    <Input id="country"/>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel htmlFor="city">City</InputLabel>
                    <Input id="city"/>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel htmlFor="description">Description</InputLabel>
                    <Input id="description" multiline minRows={3} />
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} variant="outlined">
                    Close
                </Button>
                <Button variant="contained">
                    Add Tour
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddTourDialog;