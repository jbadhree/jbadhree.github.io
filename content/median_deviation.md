---
title: Why Median Absolute Deviation May Be Better Than Standard Deviation
---
I recently attended a session on essential math for machine learning, where the instructor covered the differences between mean and median before explaining how standard deviation is calculated. They showed that standard deviation relies on the mean, which is used to find variance, and this variance is then squared and square-rooted to yield the standard deviation. One of my fellow students asked, “Why use the mean for standard deviation? Why not use the median?” The instructor’s response was simply, “That’s how it’s defined.” While accurate, I felt this didn’t fully answer the question, so I decided to look into it myself. Here’s what I found and why, in certain cases, using the Median Absolute Deviation (MAD) may actually be a more robust alternative.

Mean vs. Median: Understanding Central Tendency

Before diving deeper into MAD and standard deviation, let’s clarify two key measures of central tendency: mean and median. 

- The mean is the average of all data points, calculated by summing the values and dividing by the total number of observations. It’s useful in symmetric datasets but can be pulled toward extreme values or outliers, potentially skewing the perception of central tendency.

- The median is the middle value when data points are ordered from lowest to highest. It provides a stable measure of central tendency that’s not affected by outliers. 

For example, in a dataset with household incomes of $30,000, $35,000, $40,000, and $200,000, the median better reflects the “typical” income than the mean, which would be skewed upward by the high-income outlier.

Standard Deviation: The Formula and Its Use

Standard deviation (SD) measures how spread out the data points are around the mean and is calculated as follows:

$\sigma = \sqrt{\frac{1}{N} \sum_{i=1}^{N} (x_i - \mu)^2}$

where:
N  is the number of observations 
$x_i$ represents each individual observation
$\mu$ is the mean of the dataset.

SD is most effective when data is normally distributed and doesn’t contain extreme outliers, as it captures all deviations from the mean, including outliers.

**Median Absolute Deviation: A Robust Alternative**

The Median Absolute Deviation (MAD) calculates spread using the median rather than the mean, making it less sensitive to extreme values. MAD’s formula is:

$\text{MAD} = \text{median}(|X - \text{median}(X)|)$

This approach focuses on the typical distance from the median, offering a more stable and robust measure of spread for datasets with outliers or skewed distributions.

**Why Standard Deviation May Not Always Be Ideal**

1. Sensitivity to Outliers:
	Standard deviation squares each deviation from the mean, which gives extra weight to outliers. This can significantly inflate SD in datasets with extreme values, making it an unreliable spread measure.
2. Assumption of Normality:
	Standard deviation works best for normally distributed data. In skewed data, the mean may not accurately represent the “center,” making SD a less reliable indicator of spread.
3. Impact of Skewed Distributions:
	In skewed data, the mean and standard deviation often overestimate the spread, as the mean is pulled toward the tail. MAD, based on the median, remains more resilient in such situations.

**Why Median Absolute Deviation Might Be Better**

1. Robustness to Outliers:
	MAD’s reliance on the median makes it largely unaffected by extreme values, providing a clearer picture of “typical” deviation in data with outliers.
2. Suitability for Skewed Distributions:
	For skewed data, MAD offers a more representative measure of variability that’s not influenced by the data’s asymmetry.
3. Consistency Across Diverse Datasets:
	MAD’s stability makes it ideal for irregular datasets, like financial or environmental data, where it provides a reliable measure of spread without being distorted by outliers.

***Examples: When to Use MAD vs. Standard Deviation***

**Example 1: MAD is Better – Analyzing Income Data**

Consider a dataset of household incomes with a right-skewed distribution, where a few high earners push the mean to the right:

`Incomes = [35, 40, 42, 43, 45, 48, 50, 120]`

In this case:
```
Mean is 53.875, and SD is 26.96.
Median is 43.5, and MAD is 5.
```

The high income inflates SD, while MAD offers a clearer view of the spread among typical incomes, making MAD more representative.

**Example 2: Standard Deviation is Better – Heights of Adults**

Consider a dataset of adult male heights, which usually follows a normal distribution:

`Heights = [66, 67, 68, 69, 70, 71, 72] `

In this case:
```
Mean is 69, and SD is 2.16.
Median is 69, and MAD is 1.48.
```

With normally distributed data, SD captures variability more comprehensively, making it a better measure here.

**Summary: When to Choose MAD or Standard Deviation**

Choose MAD when:
	•	The dataset contains outliers or extreme values.
	•	Data is skewed and non-normal.
	•	You need a robust spread measure that’s unaffected by outliers.
	•	Choose Standard Deviation when:
	•	Data is normally distributed with few or no outliers.
	•	Capturing all variations, including outliers, is important for your analysis.

**Conclusion**

While standard deviation remains valuable for normally distributed data, Median Absolute Deviation is a powerful alternative for datasets with outliers or skewed distributions. Knowing each metric’s strengths allows you to choose the most suitable tool, yielding more accurate insights into your data.
