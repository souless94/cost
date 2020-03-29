# Cost Analyzer

Cost Analyzer is a free project that provide some chart based on csv inputs.

### Installation
To build up fast for testing :

```sh
$ conda install -n <name> python=3
$ pip install -r requirements.txt
```

### Heroku
Do run locally for django admin page.
```sh
python manage.py collectstatic
```
```sh
$ add SECRET_KEY in heroku dashboard at https://dashboard.heroku.com/apps
$ heroku addons:create heroku-postgresql:hobby-dev
$ SET PGUSER=<<User>> 
$ SET PGPASSWORD= <<password>>
$ heroku pg:push postgres://localhost/dbname -a appname
$ heroku config:set DISABLE_COLLECTSTATIC=1
```
### Tools Used

Cost analyzer
Instructions on how to use them in your own application are linked below.

| Tools | Link |
| ------ | ------ |
| GitHub | https://github.com/ |
| Django | https://www.djangoproject.com/ |
| BootStrap | https://getbootstrap.com/ |
| Jquery | https://code.jquery.com/ |
| django-crispy-forms | https://django-crispy-forms.readthedocs.io/en/latest/ |
| Apache ECharts | https://www.echartsjs.com/en/index.html |
| postgres | https://www.postgresql.org/download/ |

### User Guide
- login with username and password at https://costanalyzerxd.herokuapp.com/
- upload the csv file

### Guides
- https://medium.com/@hdsingh13/deploying-django-app-on-heroku-with-postgres-as-backend-b2f3194e8a43

### TODO
To do if i have spare time :
- authorization -> users can only view their own expenses/costs
