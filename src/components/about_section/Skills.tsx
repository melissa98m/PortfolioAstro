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
        <div className="flex flex-col space-y-4 lg:w-1/2 mx-4">
            <h1 className="text-3xl font-bold">Skills</h1>
            {skills.map((skill, index) => (
                <div className="flex flex-col space-y-2 relative" key={index}>
                    <div className="relative left-10 w-full">
                        <p className="text-xl font-normal">{skill.name}</p>
                        <p className="text-xl font-normal">{skill.logo}</p>
                    </div>

                    {index !== skills.length - 1 && (
                        <div className="absolute top-4 left-3 h-full w-1 bg-secondary dark:bg-dk-secondary hover:bg-accent dark:hover:bg-dk-accent z-0"></div>
                    )}
                </div>
            ))}
        </div>
    );
}
