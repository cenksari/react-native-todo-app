import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TodoItem = (props) => {
	return (
		<TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
			<View style={styles.listItem}>
				<View>
					<Text style={styles.listItemTitle}>{props.title}</Text>
				</View>
				<View>
					<Text style={styles.listItemDescription}>{props.description}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	listItem: {
		padding: 10,
		width: '100%',
		marginTop: 20,
	},
	listItemTitle: {
		width: '100%',
		fontSize: 16,
		marginBottom: 5,
		textAlign: 'left',
		fontWeight: 'bold',
	},
	listItemDescription: {
		fontSize: 16,
	},
});

export default TodoItem;
