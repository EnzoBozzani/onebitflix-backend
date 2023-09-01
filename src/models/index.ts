import { Category } from './Category'
import { Course } from './Course'
import { Episode } from './Episode'
import { Favorite } from './Favorite'
import { Like } from './Like'
import { User } from './User'
import { WatchTime } from './WatchTime'

Category.hasMany(Course, { as: 'courses' });

Course.belongsTo(Category);
Course.hasMany(Episode, { as: 'episodes'} );
Course.belongsToMany(User, { through: Favorite });
Course.belongsToMany(User, { through: Like });
Course.hasMany(Favorite, { as: 'favoritesUsers', foreignKey: 'course_id' });

Episode.belongsTo(Course);
Episode.belongsToMany(User, { through: WatchTime });

Favorite.belongsTo(Course);
Favorite.belongsTo(User);

User.belongsToMany(Course, { through: Favorite });
User.belongsToMany(Course, { through: Like });
User.hasMany(Favorite, { as: 'favoritesCourses', foreignKey: 'user_id' });
User.belongsToMany(Episode, { through: WatchTime });



export {
    Category,
    Course,
    Episode,
    Favorite,
    User, 
    Like, 
    WatchTime
}