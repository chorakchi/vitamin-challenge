this template component display information in a chart view from the information entry in form. 

### Questionnaire Questions:

- What’s your name?
- How much do you earn per month?
- What is your risk tolerance level? (Slider between 0-10)

Once the questionnaire is completed, she should see a dashboard showing a graph of how her portfolio has developed between 1.1.2017 and 1.6.2021.

The portfolio develops as follows:

- At the beginning of each month (the first day that the stock market is open), Lea always invests 15% of her monthly income. The stocks she invests in are those in her portfolio, based on the supplied weighting.
- Assume that Lea’s first contribution took place on 3.1.2017 and her last contribution on 1.6.2021
- The close price should be used as the purchase price of the partial share

---

### **Worked Example**

As an example, with a from date of 1.1.2017 and to date of 3.6.2021, if Lea earns $3000 per month and has a risk tolerance of 5

- Her monthly contribution would be $450

Therefore on 3.1.2017 she invested:

- $292.50 in *CAKE for 4.92 shares*
- $90.00 in *PZZA for 1.06 shares*
- $67.50 in *EAT for 1.37 shares*

If she continued to invest monthly, as of 1.6.2021, these shares would be worth:

- CAKE: ~$22,059.73 (~385.46 shares)
- PZZA: ~$7,457.61 (~78.18 shares)
- EAT: ~$5,393.25 (~94.04 shares)

> you can try it out manually, it working with moke data copied from API.

### Playground:
