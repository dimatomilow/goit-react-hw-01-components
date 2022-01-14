import {List,Item,Span,Title} from '../styled/List'

const Statistics = ({stats,title}) => {
  return (<section>
      <Title>{ title?title:"Здесь нету ничего"}</Title>
      <List >

   {stats.map(dat =>(<Item key={dat.id}>
  <Span>{ dat.label}</Span>
  <Span>{ dat.percentage}</Span>
    </Item>))
    }
  </List>
</section>
    );
}

export default Statistics;