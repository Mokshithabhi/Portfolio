import React from "react";
import { techStackDetails } from "../Details";

const Technologies : React.FC = ()=> {
  const {
    html,
    css,
    js,
    react,
    redux,
    tailwind,
    bootstrap,
    sass,
    vscode,
    git,
    github,
    npm,
    postman,
    figma,
    typescript,
    node,
    express,
    sql,
    mongoDb,
    websockets,
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={html} title="html" alt="html" />
        <img src={css} title="CSS" alt="Css" />
        <img src={js} title="JavaScript" alt="js" />
        <img src={typescript} title="typescript" alt="typescript" />
        <img src={react} title="React" alt="React" />
        <img src={redux} title="Redux" alt="Redux" />
        <img src={tailwind} title="Tailwind CSS" alt="Tailwind CSS" />
        <img src={bootstrap} title="Bootstrap" alt="Bootstrap" />
        <img src={sass} title="SASS" alt="sass" />
        <img src={node} title="Node" alt="node" />
        <img src={express} title="express" alt="express" />
        <img src={sql} title="sql" alt="sql" />
        <img src={mongoDb} title="mongoDb" alt="mongoDb" />
        <img src={websockets} title="websockets" alt="websockets" />
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={vscode} title="Visual Studio Code" alt="" />
        <img src={git} title="Git" alt="Git" />
        <img src={github} title="Github" alt="Github" />
        <img src={figma} title="Figma" alt="Figma" />
        <img src={npm} title="NPM" alt="NPM" />
        <img src={postman} title="Postman" alt="Postman" />
      </section>
    </main>
  );
}

export default Technologies;
