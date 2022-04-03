import SkillBar from "./SkillBar";

const skills = [
    {
        name: 'JavaScript',
        percent: '80%',
        color:'#76e1c4'
    },
    {
        name: 'React',
        percent: '70%',
        color:'#6adcd3'
    },
    {
        name: 'Nextjs',
        percent: '60%',
        color:'#3fd1de'
    },
    {
        name: 'HTML',
        percent: '90%',
        color:'#37b6e0'
    },
    {
        name: 'CSS3',
        percent: '70%',
        color:'#449bd8'
    },
    {
        name: 'TypeScript',
        percent: '60%',
        color:'#4278d9'
    },
    {
        name: 'Python',
        percent: '50%',
        color:'#4c56d8'
    },
    {
        name: 'Java',
        percent: '55%',
        color:'#513dcd'
    },
    {
        name: 'nodeJS',
        percent: '60%',
        color:'#923ee1'
    },
    {
        name: 'C#',
        percent: '60%',
        color:'#d356e5'
    },
    {
        name: 'MYSQL',
        percent: '70%',
        color:'#f660b5'
    },
    {
        name: 'ORACLE',
        percent: '70%',
        color:'#f06387'
    },
    {
        name: 'MSSQL',
        percent: '70%',
        color:'#f27e7e'
    }
]


export default function Skills(){

    // skills 페이지가 보여지면 skillbar 애니메이션 실행 
    function event_start () {
        if(typeof window === 'object'){
            this.wrapper = document.getElementsByClassName('skills-wrapper')[0];
            this.wrapper.addEventListener('mouseover', this.skills_event_start);

            this.skills_event_start = function(){
                this.childNodes[0].childNodes.forEach = Array.prototype.forEach;
                this.childNodes[0].childNodes.forEach((child) => {
                    child.childNodes[1].style.animationPlayState = 'running';
                })
            }
        }
    }

    setInterval(event_start, 1000);

    return (
        <div className="skills-wrapper">
            <div className="skills-bar">
                {skills.map((skill, idx) => (
                    <SkillBar key={idx} data={skill}/>
                ))}
            </div>
            <style jsx>{`
                .skills-wrapper{
                    display: grid;
                    height: 100%;
                    place-items: center;
                }

                .skills-bar{
                    width: 80%;
                    border-radious: 10px;
                    padding: 25px 30px;
                    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
                }
            `}</style>
        </div>
    )
}