import LaernCard from "../components/learn-card";

const cardTitles = {
    [
        title = "Lessons",
    
    
        title = "Video courses",
    
    
        title = "Exercices and Exams",
    
    
        title = "Student Notes"
    ]
}
export default function Module() {
    return (
        <div>
            <h1>Hello this is the module page </h1>
            <p>pick a way to learn</p>
            <div>
                {cardTitles.map(() => {
                    <LaernCard title={cardTitles.title}/>
                })}
            </div>
        </div>
    )
}