
import { Star } from "lucide-react";

interface StarRatingProps{
    score: number;
    size?:number;
}

export default function StarRating({score, size = 24}:StarRatingProps) {
    return(
    <div className="flex items-center">
        {Array.from({length: 5}).map((_,i) => {
            const remaining = score - i;
            const fillPercent = Math.max(0, Math.min(1, remaining)) * 100;


            return(
                <div 
                key={i}
                className="relative"
                style={{ width: `${size}px`, height: `${size}px` }}>
                    <Star
                    size={size}
                    strokeWidth={0}
                    className="absolute inset-0 text-dark/20"
                    fill="currentColor"/>

                    <div className="absolute top-0 left-0 bottom-0 overflow-hidden"
                    style={{width:`${fillPercent}%`}}>
                        <Star
                        size={size}
                        stroke = 'none'
                        className="text-gold"
                        fill="currentColor"/>
                    </div>
                </div>
            );
        })}
    </div>
    );
}