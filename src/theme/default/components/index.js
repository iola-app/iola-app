import { merge } from 'lodash';
import { StyleSheet } from 'react-native';
import getTheme from 'native-base/src/theme/components';

export default (variables => ({
  ...variables,
  ...merge(getTheme(variables), {
    'Sparkle.LoadingBackground': {
      'NativeBase.Container': {
        'NativeBase.ViewNB': {
          'Sparkle.Spinner': {
            color: variables.brandPrimary,
          },
        },
      },
    },

    'NativeBase.Container': {
      backgroundColor: variables.backgroundColor,
    },

    'Sparkle.TouchableOpacity': {
      '.disabled': {
        opacity: 0.3,
      },

      'NativeBase.Icon': {},

      '.primary': {
        'NativeBase.Text': {
          color: variables.brandPrimary,
        }
      },

      '.button': {
        justifyContent: 'center',
        height: 50,

        '.bordered': {
          borderWidth: 1,
          borderRadius: variables.borderRadiusBase,
          borderColor: variables.buttonBorderColor,

          'NativeBase.Text': {
            color: variables.buttonBorderColor,
          },
        },

        'NativeBase.Text': {
          textAlign: 'center',
          fontSize: 16,
          fontWeight: '500',
          color: variables.textColor,
        },
      },
    },

    'NativeBase.Fab': {
      'NativeBase.Icon': {
        color: '#000000',
      },

      backgroundColor: variables.highlightColor,
      elevation: 5,
    },

    'NativeBase.ViewNB': {
      '.padder': {
        padding: variables.contentPadding,
      },

      '.horizontalPadder': {
        paddingHorizontal: variables.contentPadding,
      },

      '.verticalPadder': {
        paddingVertical: variables.contentPadding,
      },

      '.highlight': {
        backgroundColor: variables.highlightColor,
      },

      '.background': {
        backgroundColor: variables.backgroundColor,
      },

      '.foreground': {
        backgroundColor: variables.foregroundColor,
      },
    },

    'NativeBase.Item': {
      '.last': {
        borderWidth: 0,
      }
    },

    'Sparkle.Thumbnail': {
      width: 40,
      height: 40,
      borderRadius: variables.borderRadiusBase,
      borderColor: '#E8EAF0',
      borderWidth: StyleSheet.hairlineWidth,

      '.small': {
        width: 32,
        height: 32,
        borderRadius: 6,
      },

      '.large': {
        borderWidth: 0,
        borderRadius: variables.borderRadiusBase,
        height: 168,
        width: 168,

        '.default': {
          borderWidth: 1,
        },
      },
    },

    'NativeBase.Button': {
      elevation: 0,
      height: 50,

      'Sparkle.Spinner': {
        position: 'absolute',
        right: variables.contentPadding,
        color: '#FFFFFF',
      },

      'NativeBase.Text': {
        fontSize: 16,
        fontWeight: '500',
      },

      '.primary': {
        '.disabled': {
          backgroundColor: '#5F96F2',
          opacity: 0.5,
        },
      },

      '.transparent': {
        '.secondary': {
          backgroundColor: 'transparent',
        },

        '.disabled': {
          backgroundColor: 'transparent',
          opacity: 0.3,
        }
      },

      '.bordered': {
        '.secondary': {
          backgroundColor: 'transparent',
        },
      },

      '.light': {
        'NativeBase.Text': {
          color: variables.textColor,
        },
      },

      '.secondary': {
        borderColor: '#E8EAF0',
        backgroundColor: variables.brandLight,

        'NativeBase.Text': {
          color: variables.textColor,
        },

        'NativeBase.Icon': {
          color: variables.textColor,
        },

        '.bordered': {
          'NativeBase.Text': {
            color: variables.textColor,
          },

          'NativeBase.Icon': {
            color: variables.textColor,
          },
        },

        '.transparent': {
          'NativeBase.Text': {
            color: variables.textColor,
          },
        },
      },
    },

    'NativeBase.H1': {
      fontWeight: '500',
      '.inverse': {
        color: variables.inverseTextColor,
      },
    },

    'NativeBase.H2': {
      fontWeight: '600',
      fontSize: 24,

      '.inverse': {
        color: variables.inverseTextColor,
      },
    },

    'NativeBase.H3': {
      '.inverse': {
        color: variables.inverseTextColor,
      },
    },

    'NativeBase.Text': {
      '.inverse': {
        color: variables.inverseTextColor,
      },

      '.secondary': {
        color: variables.secondaryTextColor,
      },
    },

    'NativeBase.Icon': {
      '.inverse': {
        color: variables.inverseTextColor,
      },

      '.secondary': {
        color: variables.secondaryTextColor,
      },
    },

    'NativeBase.Header': {
      'NativeBase.Body': {
        alignItems: 'center',
      },
    },

    'NativeBase.ListItem': {
      '.searchBar': {
        paddingHorizontal: variables.listItemPadding + 5,
        backgroundColor: 'transparent',

        'NativeBase.Item': {
          padding: 10,
          borderRadius: variables.borderRadiusBase,
          backgroundColor: variables.toolbarInputColor,
          shadowColor: '#E1E6ED',
          shadowRadius: 4,
          shadowOpacity: 1,
          shadowOffset: {
            width: 0,
            height: 0,
          },

          'NativeBase.Icon': {
            color: variables.secondaryTextColor,
            fontSize: 18,
          },
        },
      },

      'NativeBase.Body': {
        'NativeBase.Text': {
          '.name': {
            fontWeight: '600',
          },

          '.headline': {
            lineHeight: 20,
            marginBottom: 5,
          },

          '.content': {
            color: '#AFB2BF',
            fontSize: 14,
          },
        },
      },

      'NativeBase.Right': {
        'NativeBase.Text': {
          color: '#AFB2BF',
          lineHeight: 20,
          marginBottom: 5,
          fontSize: 10,
        },

        'NativeBase.Badge': {
          height: null,
          width: null,
          minWidth: 18,
          paddingHorizontal: 2,
          paddingVertical: 0,
          borderRadius: 9,

          'NativeBase.Text': {
            fontWeight: 'bold',
            fontSize: 10,
            lineHeight: 18,
          },
        },
      },

      '.chatItem': {
        'NativeBase.Body': {
          paddingVertical: 15,
        },

        'NativeBase.Right': {
          paddingVertical: 15,
        },

        'NativeBase.Left': {
          paddingVertical: 15,
        },
      },

      '.last': {
        /**
         * Hide bottom border of last item in list
         * Overriding `borderBottomWidth` did not work, so had to hack it
         */
        'NativeBase.Body': {
          borderBottomColor: 'rgba(0, 0, 0, 0)',
        },
        'NativeBase.Right': {
          borderBottomColor: 'rgba(0, 0, 0, 0)',
        },
      },
    },

    'NativeBase.Card': {
      borderWidth: 0,

      'NativeBase.CardItem': {
        padding: 0,

        '.header': {
          alignItems: 'center',

          'NativeBase.Text': {
            fontWeight: null,
            color: variables.secondaryTextColor,
          },

          'NativeBase.Icon': {
            width: 30,
            fontSize: 20,
            color: variables.secondaryTextColor,
          },
        },

        '.padder': {
          padding: variables.contentPadding,
        },

        '.horizontalPadder': {
          paddingHorizontal: variables.contentPadding,
        },

        '.highlight': {
          backgroundColor: variables.highlightColor,
        },

        '.background': {
          backgroundColor: variables.backgroundColor,
        },

        '.foreground': {
          backgroundColor: variables.foregroundColor,
        },

        '.cardBody': {
          flexDirection: 'column',
        }
      },

      '.topBorder': {
        borderTopWidth: variables.borderWidth,
      },
    },

    'Sparkle.Divider': {},

    'Sparkle.Shadow': {},

    'Sparkle.ScreenHeader': {
      opaque: {
        backgroundColor: variables.foregroundColor,
      },

      transparent: {
        backgroundColor: 'transparent',
      },

      icon: {
        color: variables.toolbarBtnTextColor,
      },

      'NativeBase.Icon': {
        fontSize: 35,
        color: variables.toolbarBtnTextColor,
        margin: 7,
      },

      'Sparkle.TouchableOpacity': {
        paddingHorizontal: variables.contentPadding,

        'NativeBase.Text': {
          color: variables.brandPrimary,
        },

        '.secondary': {
          'NativeBase.Text': {
            color: variables.toolbarBtnTextColor,
          },
        },
      },
    },


    'Sparkle.SearchBar': {
      inputWrap: {
        backgroundColor: variables.toolbarInputColor,
      },
    },

    'Sparkle.TabBar': {},
    'Sparkle.BottomTabBar': {
      activeTintColor: variables.brandPrimary,
      inactiveTintColor: variables.toolbarBtnTextColor,
    },

    'Sparkle.ChatFooter': {
      root: {
        backgroundColor: variables.foregroundColor,
      },

      inputWrap: {
        backgroundColor: variables.toolbarInputColor,
      },

      sendIcon: {
        color: variables.toolbarBtnTextColor,
      },
    },

    'Sparkle.NoContent': {
      'NativeBase.ViewNB': {
        backgroundColor: variables.placeholderColor,
      },

      '.inverted': {
        'NativeBase.ViewNB': {
          backgroundColor: variables.foregroundColor,
        },
      },
    },

    /**
     * Placeholders
     * TODO: Think of a better approach ( more generic - less hardcoded )
     */
    'Sparkle.ChatListItem': {
      'Sparkle.Placeholder': {
        'NativeBase.ListItem': {
          'NativeBase.Left': {
            'NativeBase.ViewNB': {
              backgroundColor: variables.placeholderColor,
            },
          },

          'NativeBase.Body': {
            'NativeBase.Text': {
              backgroundColor: variables.placeholderColor,
            },
          },
        },
      },
    },

    'Sparkle.FieldSection': {
      'Sparkle.Placeholder': {
        'NativeBase.Card': {
          'NativeBase.CardItem': {
            '.header': {
              'NativeBase.Text': {
                backgroundColor: variables.placeholderColor,
              },
            },

            '.cardBody': {
              'NativeBase.ViewNB': {
                backgroundColor: variables.placeholderColor,
              },
            },
          },
        },
      },
    },

    'Sparkle.PhotoListItem': {
      'Sparkle.Placeholder': {
        backgroundColor: variables.placeholderColor,
      },
    },

    'Sparkle.UserAvatar': {
      'Sparkle.Placeholder': {
        backgroundColor: variables.placeholderColor,
      },
    },

    'Sparkle.UserHeading': {
      'placeholder': {
        backgroundColor: variables.highlightColor,
      },

      'NativeBase.ViewNB': {
        'Sparkle.UserAvatar': {
          'Sparkle.Thumbnail': {
            'Sparkle.Image': {
              backgroundColor: variables.highlightColor,
            },
          },
          'Sparkle.Placeholder': {
            backgroundColor: variables.highlightColor,
          },
        },
      },
    },

    'Sparkle.UserListItem': {
      'Sparkle.Placeholder': {
        'NativeBase.ListItem': {
          'NativeBase.Left': {
            'NativeBase.ViewNB': {
              backgroundColor: variables.placeholderColor,
            },
          },

          'NativeBase.Body': {
            'NativeBase.ViewNB': {
              backgroundColor: variables.placeholderColor,
            },
          },
        },
      },
    },

    'Sparkle.UserList': {
      '.searchResult': {
        'Sparkle.UserListItem': {
          'Sparkle.Placeholder': {
            'NativeBase.ListItem': {
              'NativeBase.Left': {
                'NativeBase.ViewNB': {
                  backgroundColor: variables.highlightColor,
                },
              },
    
              'NativeBase.Body': {
                'NativeBase.ViewNB': {
                  backgroundColor: variables.highlightColor,
                },
              },
            },
          },
        },
      },
    },

    'Sparkle.UsersRowItem': {
      'Sparkle.Placeholder': {
        'NativeBase.ViewNB': {
          backgroundColor: variables.highlightColor,
        },
      },
    },

    'Sparkle.RefreshControl': {
      color: variables.brandPrimary,
    },

    'Sparkle.BarBackgroundView': {
      backgroundColor: variables.foregroundColor,
    },

    'Sparkle.AvatarInput': {
      placeholder: {
        backgroundColor: variables.placeholderColor,
      },
    },

    'Sparkle.ImageComments': {
      container: {
        backgroundColor: variables.backgroundColor,
      },
    },

    'Sparkle.ImageCommentsItem': {
      placeholderContent: {
        backgroundColor: variables.placeholderColor,
      },

      placeholderAvatar: {
        backgroundColor: variables.placeholderColor,
      },
    },

    'Sparkle.MessageItem': {
      'Sparkle.Placeholder': {
        'NativeBase.ViewNB': {
          backgroundColor: variables.placeholderColor,
        },
      },
    },

    'Sparkle.FieldItem': {
      borderBottomColor: variables.listBorderColor,
    },

    'Sparkle.BackdropHeader': {
      'Sparkle.TouchableOpacity': {
        'NativeBase.Text': {
          color: variables.brandPrimary,
        },

        '.cancel': {
          'NativeBase.Text': {
            color: variables.toolbarBtnTextColor,
          },
        },
      },
    },

    'Sparkle.BackButton': {
      '.icon': {
        color: variables.toolbarBtnTextColor,
      },
    },

    'Sparkle.ImageView': {
      indicator: {
        color: variables.toolbarBtnTextColor,
      },

      headerIcon: {
        color: variables.toolbarBtnTextColor,
      },
    },

    'Sparkls.ErrorBoundary': {
      'NativeBase.ViewNB': {
        'NativeBase.H1': {
          color: variables.brandPrimary,
        },
      },
    },

    'Sparkle.Image': {
      backgroundColor: variables.placeholderColor,
    },
  }),
}));
