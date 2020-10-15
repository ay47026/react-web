import React from 'react';
// import { Media, CardImg } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';




  function RenderDish({dish}){
          return(
            <div className ="">
              <Card>
                     <CardImg top width="100%" src={dish.image} />
                     <CardBody>
                     <CardTitle>{dish.name} </CardTitle>
                     <CardText>{dish.description} </CardText>
                     </CardBody>
              </Card>
            </div>
          );
}


function RenderComments({comments}){


      const comm =  comments.map((com) => {
          const c_date = new Date(com.date);
          const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
            return(
            
                <div  key={com.id}>
                 <p> {com.comment}</p>
                 <p>-- {com.author}, {monthNames[c_date.getMonth()]} {c_date.getDate()} {c_date.getYear()}</p>
                </div>
                
                
               
              );
        });
        
        return(
            
            <div>
              <h4>Comments</h4>
            {comm}
            </div>
          );

  
}

const DishDetail = (props) => {
   
   if(props.dish != null){
                 return (
                <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
                </div>
            );
   }
}



export default DishDetail;