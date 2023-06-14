# Singleton Design Pattern
The Singleton Pattern is a software design pattern which ensures that a class has only one instance and provides a global point of access to the object of that class. If we do multiple requests to the class, will get a single copy of an instance.

## Overview
Advantages of Singleton Pattern:

 - Beneficial for objects which need to be shared between different parts in your application.For example, only a single copy of an instance will be required for Retrofit, Room DB, or Shared Preference.

- Useful for resources that are expensive to create in your application.
- And of course, handles memory efficiently.

## Structure
![](/src/singleton/singleton-structue.png)
