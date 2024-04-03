import { useEffect, useRef } from "react";
import { useAppSelector } from "../../redux/store";

function Background() {
    const BACKGROUND = useAppSelector((state) => state.backgroundReducer);
    const videoRef = useRef<HTMLVideoElement>();
    const mousedownEvent = (e: any) => {
        videoRef.current?.play();
    };
    useEffect(() => {
        setTimeout(() => {
            if (BACKGROUND.isLoading) return;
            !BACKGROUND.isPlay && videoRef.current?.pause();
            BACKGROUND.isPlay && videoRef.current?.play();
        }, 10);
    }, [BACKGROUND]);
    return (
        <div
            className="fixed left-0 right-0 top-0 bottom-0"
            onMouseDown={(e) => {
                mousedownEvent(e);
            }}
        >
            {!BACKGROUND.isLoading && (
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    loop
                    muted
                    src={BACKGROUND.url}
                ></video>
            )}
        </div>
    );
}
export default Background;
