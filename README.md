#Survive-Here

_Abstract_: A 2-D single player mystery/survival game built around the using the HERE Api for level creation. The user is plopped down into Chicago during a zombie outbreak. They have to use their surroundings to survive. The surroundings and map tiles are generated using GPS coords sent to HERE's Map Service and Venue Discovery Service. The end goal is to finish the main quests. 
** *Note not all of the following will be implemented, but just lays out an eventual plan**

##Player:
###_Profession_: 
At the beginning of the game the player chooses a profession which starts them off with points in certain skills, actions, and items. 
- Nurse
- Computer Engineer
- Mechanic
- Police Officer
- Crook

###_Skills_: 
Skills are point based attributes a player has that act as threshold for being able to do certain actions, using certain items, etc. Think Fallout for this. Examples of skills:
- Firearms (ability to use guns)
- Melee (ability to use melee)
- Medicine (ability to use higher level first aid kits)
- Street Smarts (Lockpicking, Carjacking, etc)
- Computers (hacking)
- Stealth (chance of sneaking by monsters without having to fight)
- Survival (how much you need to eat, likelihood of finding food, etc)

###_Actions_:
In any given place and during any given time, you have certain number of actions available to you. These are contirbuted from your skills, profession, reading books, having items, etc. 
- If you have a firearm in your inventory, you may "shoot"
- If you read a science book, you may investigate a lab
- They can look at their phone for GPS / Journal entering (default thing everyone has)

###_Items_:
Items can be stored in the players inventory(limited) or at their Home(large limited). Possible "Stashing" skill could allow building small stashes in the world. 

Items are contained in the Item Database, which is an MySQL/XML doc containing large tabnle with the follwing Schema:
Name: varchar(32): UNIQUE
Type: varchar(32): Can be only of certain types (e.g. 'Weapon', 'Tool', 'Consumable')
Description: varchar(max)
Rarity: varchar(32): Can only of certain rarities
Uses: int: Either Null, or has value (consumables)
	
##Encounters:
Encounters database contains Encounters, 

##Quests: