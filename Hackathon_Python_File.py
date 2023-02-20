#Import necessary packages
import folium
import numpy as np
import pandas as pd
import requests


def get_geocode (address):
	url = f'https://nominatim.openstreetmap.org/search?q={address}&format=json'
	#Get the response from the url and make it a json object
	response=requests.get(url)
	data=response.json()

	#Check for errors
	if len(data) == 0:
		return None

	#Convert data into lat and lon, in the from of a float
	lat=float (data[0]['lat'])
	lon=float (data[0]['lon'])
	return (lat, lon)


#Read in the dataset
df=pd.read_csv ('HospitalData5.csv')
df ['lat_lon']=df['location'].apply(get_geocode) #Execute function call


#Create map with default location and zom
my_map=folium.Map(location=[37.8044,-122.2712], zoom_start=5)

for num, row in df.iterrows():

	#Get other necessary information
	title=row['Name'] 
	number=row ['number']
	lat, lon = row['lat_lon']

	#Create marker and add to map
	marker=folium.Marker (location=[lat,lon], popup =f'{title} </b>  {row["location"]}  </b> {number}')
	marker.add_to(my_map)

#Save as an html file
my_map.save('my_map.html')




