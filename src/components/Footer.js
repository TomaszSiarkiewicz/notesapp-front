import axios from "axios";

export const Footer = () => {
    const handleCounterClick = async () => {
        const response = await axios.get(`http://ec2-18-196-134-224.eu-central-1.compute.amazonaws.com:8000/counter`);
        var counter = {
            requests: response.data.requests,
            message: response.data.message
        };
        let message = "Requests performed: " + counter.requests
        alert(message);

    }
    return (
        <div className="footer">
            <div className="footer-container">
            <h3>Request counter</h3>
            <button onClick={handleCounterClick}>show numbers</button>
        </div>
        </div>
    )
}
