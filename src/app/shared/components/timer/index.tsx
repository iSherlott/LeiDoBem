import { TimeoutContext } from "@/app/hooks/timeout";
import { ClockCircleOutlined } from "@ant-design/icons"
import { Typography } from "antd"
import { useContext } from "react";

export default function TimeoutAuth () {

    const { minutes, seconds } = useContext(TimeoutContext);

    return (
        <div style={{ background: '#E5E5FF', margin: '0px 5px', padding: '7px 10px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '6px' }}>
            <ClockCircleOutlined />
            <Typography id="minute" style={{ margin: '0px 0px 0px 3px' }}>{minutes < 10 ? "0" + minutes : minutes}:</Typography>
            <Typography id="second" style={{ margin: '0px 0px 0px 3px' }}>{seconds < 10 ? "0" + seconds : seconds}</Typography>
        </div>
    )
}