import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
from tensorflow.keras.regularizers import l2
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt

# Generate synthetic data (noisy polynomial)
np.random.seed(42)
X = np.linspace(-1, 1, 200)
y = X**3 + np.random.normal(0, 0.1, 200)
X = X.reshape(-1, 1)
y = y.reshape(-1, 1)

# Split into training and validation data
X_train, X_val, y_train, y_val = train_test_split(X, y, test_size=0.3)

# Build ANN model without regularization (Overfitting likely)
model_overfit = Sequential([
    Dense(64, activation='relu', input_shape=(1,)),
    Dense(64, activation='relu'),
    Dense(1)
])

model_overfit.compile(optimizer='adam', loss='mse')

# Build ANN model with L2 regularization
model_regularized = Sequential([
    Dense(64, activation='relu', kernel_regularizer=l2(0.01), input_shape=(1,)),
    Dense(64, activation='relu', kernel_regularizer=l2(0.01)),
    Dense(1)
])

model_regularized.compile(optimizer='adam', loss='mse')

# Train both models
history_overfit = model_overfit.fit(X_train, y_train, epochs=100, batch_size=16,
                                    validation_data=(X_val, y_val), verbose=0)
history_regularized = model_regularized.fit(X_train, y_train, epochs=100, batch_size=16,
                                            validation_data=(X_val, y_val), verbose=0)

# Plotting Loss
plt.plot(history_overfit.history['val_loss'], label='Overfit Model')
plt.plot(history_regularized.history['val_loss'], label='Regularized Model (L2)')
plt.title('Validation Loss Comparison')
plt.xlabel('Epoch')
plt.ylabel('Loss (MSE)')
plt.legend()
plt.grid(True)
plt.show()