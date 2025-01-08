import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchMovieVideo } from "../shared/Api";
import { IMovieVideo, Type } from "../interfaces/IMovieVideo";

const GoToVideo = () => {
    const { movieId } = useParams<{ movieId: string }>();
    const [videoKey, setVideoKey] = useState<string | null>(null);

    useEffect(() => {
        const getMovieVideo = async () => {
            try {
                const data: IMovieVideo = await fetchMovieVideo(Number(movieId));
                if (data && data.results) {
                    // Знаходимо перший трейлер з YouTube
                    const youtubeTrailer = data.results.find(
                        (video) => video.site === "YouTube" && video.type === Type.Trailer
                    );
                    if (youtubeTrailer) {
                        setVideoKey(youtubeTrailer.key);
                    }
                }
            } catch (error) {
                console.error("Error fetching movie video:", error);
            }
        }

        getMovieVideo();
    }, [movieId])

    return (
        <Link
            className="bg-red-500 text-white w-fit px-8 py-2 mx-auto mb-2 rounded-lg hover:bg-red-700 transition flex items-center justify-center gap-3"
            to={videoKey ? `https://www.youtube.com/watch?v=${videoKey}` : "#"}
            target="_blank"
            rel="noopener noreferrer"
        >
            <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M13.558 5.90848C14.011 6.17266 14.3868 6.55096 14.648 7.00566C14.9092 7.46037 15.0467 7.9756 15.0467 8.49998C15.0467 9.02437 14.9092 9.5396 14.648 9.99431C14.3868 10.449 14.011 10.8273 13.558 11.0915L4.512 16.3685C4.05609 16.6345 3.53804 16.7756 3.01019 16.7774C2.48233 16.7791 1.96334 16.6416 1.50563 16.3787C1.04792 16.1158 0.667686 15.7367 0.403328 15.2798C0.13897 14.8229 -0.000154495 14.3043 1.90735e-06 13.7765V3.22248C2.09808e-05 2.69471 0.139275 2.17628 0.403704 1.71952C0.668133 1.26276 1.04838 0.883852 1.50606 0.62103C1.96374 0.358207 2.48266 0.220778 3.01044 0.222613C3.53821 0.224449 4.05616 0.365485 4.512 0.631484L13.558 5.90848Z"
                    fill="white"
                />
            </svg>
            Watch Trailer
        </Link>
    );
}

export default GoToVideo;