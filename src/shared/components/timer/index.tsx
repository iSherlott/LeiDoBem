import { useTimeout } from "@/hooks/timeout";
import { ClockCircleOutlined } from "@ant-design/icons"
import { Typography } from "antd"

export default function TimeoutAuth () {

    const { minutes, seconds } = useTimeout();

    return (
        <div style={{ background: '#E6F7FF', padding: '7px 20px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <ClockCircleOutlined />
            <Typography id="minute" style={{ margin: '0px 0px 0px 3px' }}>{minutes < 10 ? "0" + minutes : minutes}:</Typography>
            <Typography id="second" style={{ margin: '0px 0px 0px 3px' }}>{seconds < 10 ? "0" + seconds : seconds}</Typography>
        </div>
    )
}