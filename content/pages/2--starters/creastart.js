import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { connect } from 'react-redux';

//4) bot option ici --->
const enterQuestion = counter => 
{
    const rows = []
    for (let i = 0; i < counter; i++){
        rows.push(<CardQuestion key={i}/>)
    }
    return rows
}
class Review extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        nom: '',
        sexe: '',
        type: '',
      };
    }
  
    componentWillMount() {
      const { steps } = this.props;
      const { nom, sexe, type } = steps;
  
      this.setState({ nom, sexe, type });
    }
  
    render() {
      const { nom, sexe, type } = this.state;
      return (
        <div>
          <h3>Sommaire</h3>
          <table>
            <tbody>
              <tr>
                <td>Nom : </td>
                <td>{nom.value}</td>
              </tr>
              <tr>
                <td>Sexe : </td>
                <td>{sexe.value}</td>
              </tr>
              <tr>
                <td>Type : </td>
                <td>{type.value}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  }
  
  Review.propTypes = {
    steps: PropTypes.object,
  };
  
  Review.defaultProps = {
    steps: undefined,
  };



return (
                    <ChatBot
                      headerTitle="Creation Bot"
                      recognitionEnable={true}
                        steps={[
                            {
                                id: '1',
                                message: 'Quel nom voulez vous donner a votre bot ?',
                                trigger: 'nom',
                              },
                              {
                                id: 'nom',
                                user: true,
                                trigger: '3',
                              },
                              {
                                id: '3',
                                message: "Creation de '{previousValue}'! Choisissez le sexe de votre Bot ?",
                                trigger: 'sexe',
                              },
                              {
                                id: 'sexe',
                                options: [
                                  { value: 'homme', label: 'Homme', trigger: '5' },
                                  { value: 'femme', label: 'Femme', trigger: '5' },
                                ],
                              },
                              {
                                id: '5',
                                message: "Pourquel type de personnes s'adresse votre Bot",
                                trigger: 'type',
                              },
                              {
                                id: 'type',
                                options: [
                                    { value: 'Finance', label: 'Finance', trigger: '7' },
                                    { value: 'Tchat', label: 'Tchat', trigger: '7' },
                                    { value: 'Web', label: 'Web', trigger: '7' },
                                    { value: 'E-commerce', label: 'E-commerce', trigger: '7' },
                                    { value: 'Sport', label: 'Sport', trigger: '7' },
                                ],
                                  },
                              {
                                id: '7',
                                message: 'Parfait, voila le recapitulatif',
                                trigger: 'review',
                              },
                              {
                                id: 'review',
                                component: <Review />,
                                asMessage: true,
                                trigger: 'update',
                              },
                              {
                                id: 'update',
                                message: 'Voulez vous modifier une donnée ?',
                                trigger: 'update-question',
                              },
                              {
                                id: 'update-question',
                                options: [
                                  { value: 'yes', label: 'Oui', trigger: 'update-yes' },
                                  { value: 'no', label: 'Non', trigger: 'end-message' },
                                ],
                              },
                              {
                                id: 'update-yes',
                                message: 'Quel domaine souhaitez-vous mettre à jour?',
                                trigger: 'update-fields',
                              },
                              {
                                id: 'update-fields',
                                options: [
                                  { value: 'nom', label: 'Nom', trigger: 'update-nom' },
                                  { value: 'sexe', label: 'Sexe', trigger: 'update-sexe' },
                                  { value: 'type', label: 'Type', trigger: 'update-type' },
                                ],
                              },
                              {
                                id: 'update-nom',
                                update: 'nom',
                                trigger: '7',
                              },
                              {
                                id: 'update-sexe',
                                update: 'sexe',
                                trigger: '7',
                              },
                              {
                                id: 'update-type',
                                update: 'type',
                                trigger: '7',
                              },
                              {
                                id: 'end-message',
                                message: 'Merci, creation et mise a jour de votre base de donnée ! Vous pouvez des a presents basculer sur la fenetre boite a outils pour rajouter toutes les fonctionalitées que vous voulez',
                                end: true,
                              },
                        ]}
                    />


//4) Faire l'export correspondant

export default connect(
mapStateToProps,
mapDispatchToProps
);