import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'


function Mysecondsection() {
    const textstyle = {
        color: "#00A8F3",
        fontWeight: "bold"
    }
   return(

        <section>
            <Container className="p-3 mt-4">
            <div className="p-3 text-dark box shadow mt-3">
                <p>
                    L’échec touche tant de personnes qui sont dans ce métier ? 
                </p>
                <p>
                    Dorénavant, la major partie de ceux qui échouent peut valoir à presque 80%, même pourcentage des demandes de stages , 
                    soi-disant <span style={{fontWeight: "bold"}}>développeurs juniors</span> ( moi aussi je suis un apprenant ) la solution : <span style={{fontStyle: "italic", color: "#00A8F3"}}>c’est de savoir me démarquer pour
                    pouvoir décrocher un job dans ce métier passionnant</span> dans une entreprise de qualité, mettre ou montrer ces 
                    compétences solidifiés, apprises pendant la formation. Beaucoup échouent parce qu’ils ou elles se disent 
                    prêts(tes), <span style={{fontWeight: "bold"}}>…Non!</span> <span style={{fontStyle: "italic", color: "#00A8F3"}}>le développement web</span> ne se juge pas, seuls les compétences, la confiance, vos comportements, 
                    vos collaborateurs donneront ce résultat venant d’eux mêmes une fois qu’ils iront bien analysés( pour une fois 
                    c’est pas très important mais à cause des entreprises ). Beaucoup échouent car ils ou elles pensent connaitre 
                    tous ou un langage parfaitement, même un sénior dev ne pourrait pas tout connaitre, certes! <span style={{fontWeight: "bold"}}>qu’est ce qu’il 
                    le rend plus efficace et rapide ?</span> c’est sa capacité à comprendre un langage et son fonctionnement sur le web 
                    et l’action de régler un problème.
                </p>
                <p>
                Je vais vous parler du plus important et ce qui rend ce métier très passionnant, 
                si vous aviez l’habitude de suivre des personnes expérimentées, ils ou elles 
                parleront tous le temps, de <span style={{fontWeight: "bold", color: "#00A8F3"}}>la cohérence</span>, nous entendons par cohérence l’organisation 
                du projet à mettre en place, comment décortiquer en plusieurs morceaux pour parfaire 
                le projet, les outils de qualités à prendre pour développer. <span style={{fontWeight: "bold", color: "#00A8F3"}}>L’adaptabilité</span>,  ici on 
                parle du responsive du projet (site webs, apps etc…), <span style={{fontWeight: "bold"}}>es ce-que le projet est bien 
                adapté aux différents appareils</span> (Ordinateurs, téléphones, tablettes) afin de faciliter 
                l’expérience ou l’interface utilisateur, c’est une partie primordiale pour toucher le 
                cœur de ses personnes lorsqu’ils ou elles visiteront le site ou l’application en question, 
                Vous ne devez donc pas négliger cette étape.  <span style={{fontWeight: "bold", color: "#00A8F3"}}>De l’analyse</span>, nous entendons par analyse , 
                avoir une idée fiable très analytique à mettre en place pour donner une bonne valeur au 
                projet lorsqu’il doit être assez parlant et representant le sujet , pas mettre des mots 
                parce qu’il faut mettre et prenez la peine de réfléchir avec précision même si c’est long 
                car c’est ce qui est bien, de plus vous aurez le temps de bien faire et de ne pas faire des 
                erreurs, être conforme aux exigences.
                </p>
            </div>
                <p className="mt-5">
                On oublie pas les couleurs à choisir, les polices pas trop gras, pas trop fine, choisissez une 
                couleur qui ira bien avec le sujet du projet, minimum deux(2) à trois(3) couleurs et différencier, 
                adapter cela au projet afin de mettre à l’aise les personnes qui viendront sur vos projets et pour 
                cela vous devez aussi faire un plan de design (je vous recommande Figma). <br /> <br />

                Alors, Readers si vous aviez aimé ce contenu vous pouvez vous applaud ire, 
                dans le cas contraire on passe aux différentes conseils à mettre en pratique 
                pour atteindre les objectifs que vous vous êtes assigné.
                </p> 
            </Container>

            <Container className="p-2 text-center">
                <FontAwesomeIcon icon={faCircleArrowDown} style={{width: "30", height: "30", color: "#00A8F3"}} />
            </Container>

            <Container  className="p-2 text-center">
                    <Row>
                        <Col sm={6}>
                           <p style={textstyle} className="mt-2">Voulez-vous devenir de bon dev ?</p>
                           <p className="mt-4">
                           Commencez par vous organiser et être discipliner 
                            dans vos tâches. <br /><br />

                            Renseignez vous sur les différents langages à 
                            apprendre mais choisissez au moins deux ou trois 
                            que vous aimez( frontend et/ou backend). <br /><br />

                            Donnez vous le défi de mettre du temps 
                            pour bien assimiler les concepts et les notions. <br /><br />
                           </p>
                        </Col>
                        <Col sm={6}>
                        <p style={textstyle}>Maintenant vous vous demandez quoi vais-je apprendre ?</p>
                        <p className="mt-4">
                        Vous allez commencer par apprendre le <span style={{color: "coral", fontWeight: "bold"}}>HTML</span> si vous êtes nouveau (2 semaines d’apprentissage). 
                        Après avoir bien acquise le <span style={{color: "coral", fontWeight: "bold"}}>HTML</span> passez en revue le <span style={{color: "#00A8F3", fontWeight: "bold"}}>CSS</span> (1 mois d’apprentissage ou 3 semaines) <br /><br />
                        et enfin le <span style={{color: "yellow", fontWeight: "bold"}}>JS(JavaScript)</span> je dirai 1 à 2 mois si vous êtes novice car ce dernier est un 
                        langage vraiment conçu pour dynamiser un projet et le rendre interactif et attaquez vous 
                        maintenant aux frameworks ou bibliothèques une fois à l’aise avec les bases citées. <br /><br /> Pour 
                        la pratique, je vous conseille d’aller étape par étape sans vous pressez, donnez vous les 
                        moyens de bien comprendre avant de passer au suivant et n’ayez pas peur de faire des erreurs 
                        c’est la base pour avancer, pratiquez suffisamment car c’est ce qui vous donnera de 
                        l’expérience et une confiance en béton.
                        </p>
                        </Col>
                    </Row>
            </Container>

            <Container className="p-2 mt-5">
                    <FontAwesomeIcon icon={faComment} style={{width: "30", height: "30", color: "#00A8F3"}} /><p>
                    Toutefois, personne ne devient un bon développeur du jour au lendemain, 
                    la seule chose qui peut vous emmener à devenir rentable, performant et 
                    à l’aise c’est de pratiquer tout simplement je ne demande pas de pratiquer 
                    parce qu’il faut le faire , faites le dans le but de bien connaitre les bases, 
                    le fonctionnement à long terme et non à court terme et c’est valable pour vos 
                    carrières, j’espère vous aviez aimé, alors rétrouvez-moi sur ces différents 
                    réseaux si vous voulez me connaitre et à bientôt…
                    </p>
            </Container>
        </section>
   );
}

export default Mysecondsection;