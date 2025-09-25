import { FC, HTMLAttributes } from "react";
import { Container, Title, Cards } from "./styles";
import CustomersSayCard from "../CustomersSayCard";

const CustomersSay: FC<HTMLAttributes<HTMLDivElement>> = (props): JSX.Element => {
  return (
    <Container {...props}>
      <Title>What ours customers say!</Title>
      <Cards>
        <CustomersSayCard
          rating={4}
          customerImg="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          customerName="Sarthak"
          testimonial="I had a wonderful experience at the restaurant! The food was amazing, and the service was outstanding. I’ll definitely be coming back more often!"
        />
        <CustomersSayCard
          rating={4}
          customerImg="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          customerName="Sweta"
          testimonial="I visited the restaurant with my family, and we were delighted with the entire experience. The food was excellent, and the atmosphere was warm and inviting. I would highly recommend it!"
        />
        <CustomersSayCard
          rating={3}
          customerImg="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          customerName="Manoj"
          testimonial="I’ve dined at many restaurants, but this one truly stood out. The ingredients were top quality, the dishes were prepared flawlessly, and the presentation was stunning. Overall, it was an exceptional dining experience!"
        />
        <CustomersSayCard
          rating={5}
          customerImg="https://images.unsplash.com/photo-1645378999013-95abebf5f3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          customerName="Puspa"
          testimonial="The restaurant offers a wide selection of dishes, and every one I tried was outstanding. On top of that, the prices are reasonable and the service is very attentive. I’ll definitely be recommending it to my friends."
        />
      </Cards>
    </Container>
  );
};

export default CustomersSay;