import React from "react";

const AgencePage = () => {
  return (
    <section>
      {/* image  */}

      <div className="pt-[clamp(15vh,50vh,60vh)]">
        <h1 className="font-[font2]  text-[clamp(2.5rem,19vw,25vw)] uppercase leading-[18vw] text-center">
          Soixan7e <br />
          Douze
        </h1>
        <div className="md:pl-[40%] font-[font2] ">
          <p className="text-[clamp(1.5rem,3.7vw,5rem)] leading-none font-bold indent-[30%]">
            Notre curiosité nourrit notre créativité. On reste humbles et on dit
            non aux gros egos, même le vôtre. Une marque est vivante. Elle a des
            valeurs, une personnalité, une histoire. Si on oublie ça, on peut
            faire de bons chiffres à court terme, mais on la tue à long terme.
            C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir
            des marques influentes.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-rows-2  font-[font2] font-bold text-xl mt-20 space-y-8 md:space-y-16 lg:space-y-24">
        <div className="grid grid-cols-2 lg:grid-col-3 gap-5 lg:gap-14">
          <div>
            <h2 className="font-bold">Expertise</h2>
          </div>
          <div class="">
            <ul class="" data-scroll="">
              <li>Stratégie</li>
              <li>Publicité</li>
              <li>Branding</li>
              <li>Design </li>
              <li>Contenu</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3  gap-5 lg:gap-20 ">
          <div classname="">
            <p>
              Nos projets_ naissent dans l’humilité, grandissent dans la
              curiosité et vivent grâce à la créativité sous toutes ses formes.
            </p>
          </div>
          <div classname="">
            <p>
              Notre création_ bouillonne dans un environnement où le talent a le
              goût d’exploser. Où on se sent libre d’être la meilleure version
              de soi-même.
            </p>
          </div>
          <div classname="">
            <p>
              Notre culture_ c’est l’ouverture aux autres. Point. Tout
              l’équipage participe à bâtir une agence dont on est fiers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencePage;
