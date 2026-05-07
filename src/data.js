export const API_KEY = 'AIzaSyCXW73RNA8apTygSAKPEMcq94NtavdINw0'

const value_converter = (value) => {
    if (value >= 1e6) {
        return (value / 1e6).toFixed(1) + 'M';
    }
    if (value >= 1e3) {
        return (value / 1e3).toFixed(1) + 'K';
    }
    return value;
}
export { value_converter }