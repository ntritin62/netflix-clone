import React from "react";
import { Jumbotron } from "../components";
import jumboData from "../fixtures/jumbo.json";
export function JumbotronContainer() {
    return (
        // trình tự: Co
        // Jumbotron.Container
        // Jumbotron
        //     Inner
        //         Content of the jumbotron
        <Jumbotron.Container>
            {jumboData.map((item) => (
                // Compound components Jumbotron có nhiều component trong đó như Jumbotron.Pane, Jumbotron.Title, Jumbotron.SubTitle,Jumbotron.Image
                <Jumbotron key={item.id} direction={item.direction}>
                    <Jumbotron.Pane>
                        <Jumbotron.Title>{item.title}</Jumbotron.Title>
                        <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
                    </Jumbotron.Pane>
                    <Jumbotron.Pane>
                        <Jumbotron.Image src={item.image} alt={item.alt} />
                    </Jumbotron.Pane>
                </Jumbotron>
            ))}
        </Jumbotron.Container>
    );
}
