# Farkle

## The site can be seen at:

[Here!](https://scoutpilgrim.github.io/farkleDice/)

### What is Farkle?
Farkle is a simple dice game where a player has to weigh their odds in order to Succeed.

### How it works
The player starts out with 6 dice(six-sided) to roll. After the player rolls, the player may put dice to the side in order to gain points. If the player rolls no winning dice combinations they will bust and lose their turn.

The points work like this (side of dice, points rewarded):
* 1 , 100pts
* 5, 50pts

Additionally, if the player rolls 3 or more of the same number, the points look like this:
* 1, 1000pts x (2^(numberRolled - 3))
* 5, 500pts x (2^(numberRolled - 3))

* 2, 200pts x (2^(numberRolled - 3))
* 3, 300pts x (2^(numberRolled - 3))
* 4, 400pts x (2^(numberRolled - 3))
* 6, 600pts x (2^(numberRolled - 3))

So, if we roll four 1's, we could select them for 2000pts (1000pts x (2^(4 - 3)))

Finally, if the player receives a flush, where they receive 1-6 in one roll:
* Flush(1-6), 1500pts

### After the player selects their Dice, they may choose to end their turn and collect their points
# OR
### They may choose to roll their remaining dice to get more points
# HOWEVER
## If a player rolls and they land on no 1's or 5's and also fail to roll 3 of a kind, they will bust and lose all of their points and will have to pass their turn


# The benefit of rolling riskily
If the player is able to gain points from all 6 dice in any number of rolls in a turn, they will be refunded their 6 dice and will be able to roll again.
### Keep in mind, the players points are not safe in until the player passes their turn, even if they get a dice refund

# Things I need to update
1. Visuals, they currently suck
2. Add a new game button that resets absolutely everything. Should update class prototypes to have a reset method
3. Computer player currently ignores rolling a Flush
4. Need a clean log that shows what the computer did on their turn (what they rolled, selected, etc.)
5. Already mentioned visuals, but UI responsiveness in particular needs a ton of work
