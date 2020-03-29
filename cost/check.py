import pandas as pd
# import the logging library
import logging
from .models import Costs
# Get an instance of a logger
logger = logging.getLogger(__name__)

def handle_uploaded_file(the_file,user):
    df = pd.read_csv(the_file,header=0)
    df = df.values.tolist()

    for ad in enumerate(df):
        amount = ad[1][0]
        description = ad[1][1]
        purchase_date = ad[1][2]
        cost = Costs(amount=amount,description=description,purchase_date=purchase_date, user=user)
        cost.save() 