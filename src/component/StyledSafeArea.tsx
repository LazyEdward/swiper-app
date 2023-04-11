
import PropTypes from 'prop-types';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyledView } from 'src/StyledComponent';

type StyledSafeAreaProp = {
	areaClassName?: string,
	children?: React.ReactNode,
}

const StyledSafeArea = ({
	areaClassName,
	children
}: StyledSafeAreaProp) => {
	const insets = useSafeAreaInsets();

	// https://www.nativewind.dev/guides/custom-components - not allow use of classsName

	return (
		<StyledView className={areaClassName} style={{
			paddingTop: insets.top,
			paddingBottom: insets.bottom,
			paddingLeft: insets.left,
			paddingRight: insets.right
		}}>
			{children}
		</StyledView>
	)

}

StyledSafeArea.propTypes = {
	areaClassName: PropTypes.string,
	children: PropTypes.node,
}

StyledSafeArea.defaultProps = {
	areaClassName: "",
	children: null,
}

export default StyledSafeArea