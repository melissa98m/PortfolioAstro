import React from "react";
import { info } from "../../data/info";

interface SkillsProps {
    skills: (typeof info)["about"]["skills"];
}

export default function Skills(props: SkillsProps) {
    const { skills } = props;

    return skills.length == 0 ? (
        <div></div>
    ) : (
        <div className="flex flex-wrap lg:w-1/2 mx-4">
            <h1 className="text-3xl font-bold w-full">Skills</h1>
            <div className="grid grid-cols-2 gap-4 w-full">
                {skills.map((skill, index) => (
                    <div className="flex items-center" key={index}>
                        <i className={skill.logo + " text-secondary dark:text-dk-secondary hover:text-accent dark:hover:text-dk-accent"}></i>
                        <p className="ml-2 text-xl font-normal">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
