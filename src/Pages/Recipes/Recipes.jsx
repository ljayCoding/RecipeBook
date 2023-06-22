import LinkButton from '../../Components/LinkButton/LinkButton';
import './recipes.css';

const Recipes = () => {
  return (
    <div>
      <div className='create-recipe-container'>
        <LinkButton
          url="/r/create-recipe"
          name="create recipe"
          variant="outlined"
        />
      </div>
      <p>recipes</p>
    </div>
  );
};
export default Recipes;
